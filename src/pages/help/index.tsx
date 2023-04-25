import Markdown from "@components/Markdown"
import PostLayout from "@components/PostLayout"
import ScrollToTop from "@components/ScrollToTop"
import { useApp } from "@hooks/app"
import { Profile } from "@interfaces/profile"
import { getProfile } from "@lib/api"
import datetime from "@lib/datetime"
import markdownToHtml from "@lib/markdownToHtml"
import { NextSeo } from "next-seo"
import { ParsedUrlQueryInput } from "querystring"
import { useMemo } from "react"
import styled from "styled-components"

const MarkDownWrapper = styled(Markdown)`
  padding: 0 0 2rem 0;
`

type HelpPageProps = {
  data: Profile;
  content: string;
}

const HelpPage = (props: HelpPageProps) => {
  const { content } = props
  const { title, description, themeColor, siteURL } = useApp()

  const finalContent = useMemo(() => {
    return content.replace('$year', datetime.now().year().toString());
  }, [content])

  return (
    <>
    <NextSeo
      title={title}
      description={description}
      themeColor={themeColor}
      openGraph={{
        url: `${siteURL}/help`,
        title: title,
        description: description,
        images: [
          {
            url: `https://vbilltran68.github.io/gen/images/${encodeURIComponent(title)}.png`,
            alt: `${title}`
          }
        ]
      }}
    />
    <PostLayout>
      <h1 className="flex flex-center text-code mb-3">{title}</h1>
      <MarkDownWrapper content={finalContent} />
      <ScrollToTop />
    </PostLayout>
    </>
  )
}

export default HelpPage

type StaticProps = {
  params: ParsedUrlQueryInput,
  preview: boolean,
}

export async function getStaticProps(props: StaticProps) {
  const profile: Profile | null = getProfile()
  const content = await markdownToHtml(profile?.content || '')

  return {
    props: {
      ...profile,
      content,
      noLayout: true,
    }
  }
}
