import HtmlRender from "@components/HtmlRender"
import PostLayout from "@components/PostLayout"
import { useApp } from "@hooks/app"
import { Profile } from "@interfaces/profile"
import { getOgImageUrl, getProfile } from "@lib/api"
import datetime from "@lib/datetime"
import markdownToHtml from "@lib/markdownToHtml"
import { NextSeo } from "next-seo"
import { ParsedUrlQueryInput } from "querystring"
import { useMemo } from "react"

type HelpPageProps = {
  data: Profile;
  content: string;
}

const HelpPage = (props: HelpPageProps) => {
  const { content } = props
  const { title, description, themeColor, appURL } = useApp()

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
        url: `${appURL}/about`,
        title: title,
        description: description,
        images: [
          {
            url: getOgImageUrl({ data: { title: 'Thông tin', description: 'Nguồn gốc và lịch sử hình thành' } } as any),
            alt: `${title}`
          }
        ]
      }}
    />
    <PostLayout>
      <h1 className="flex flex-center text-code mb-3">{title}</h1>
      <HtmlRender content={finalContent} />
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
