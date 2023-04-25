import PostLayout from "@components/PostLayout"
import styled from "styled-components"

const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .code {
    font-size: 5rem;
  }

  .description {
    font-size: 1rem;
    color: var(--color-description);
  }
`

const NotFoundPage = () => (
  <PostLayout className="h-100">
    <PageNotFoundWrapper>
      <div className="code text-comic">404</div>
      <div className="description text-code">Page not found</div>
    </PageNotFoundWrapper>
  </PostLayout>
)

export default NotFoundPage

export async function getStaticProps(props: any) {
  return {
    props: {
      noLayout: true,
    }
  }
}
