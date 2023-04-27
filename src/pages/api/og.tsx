// /pages/api/og.tsx

import { cutString } from '@utils/string'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const fetchFont = (fontURL: string) => fetch(new URL(
  fontURL,
  import.meta.url,
).href).then((res) => res.arrayBuffer())

const bangerFont = fetchFont(`https://khuetran.tech/fonts/bangers/Bangers-Regular.ttf`)
const monospaceFont = fetchFont(`https://khuetran.tech/fonts/space-mono/SpaceMono-Bold.ttf`)
const merriweatherFont = fetchFont(`https://khuetran.tech/fonts/merri-weather/Merriweather-Bold.ttf`)

export default async function handler(req: NextRequest) {
  const [
    bangerFontData,
    monospaceFontData,
    merriweatherFontData,
  ] = await Promise.all([
    bangerFont,
    monospaceFont,
    merriweatherFont,
  ]);

  try {
    const { searchParams } = new URL(req.url);
    const title = cutString(searchParams.get('title') || 'Không Tiêu Đề', 100)
    const description = searchParams.get('description') ? cutString(searchParams.get('description') as string, 100) : null
    const tags = searchParams.get('tags')?.split(',')
    const createdDate = searchParams.get('createdDate')
    const timeToRead = searchParams.get('timeToRead')

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            padding: '50px',
            letterSpacing: '-.02em',
            fontWeight: 'bolder',
            background: '#2c2c2c',
            color: '#fff',
            fontFamily: `'monospace', sans-serif`,
            gap: '10px',
          }}
        >
          {createdDate && timeToRead && <div style={{
            display: 'flex',
            lineHeight: 1.25,
            alignItems: 'center',
            gap: '10px',
            fontFamily: `'monospace', sans-serif`,
          }}>
            <span style={{
              fontSize: 20,
              color: '#f44336',
            }}>
              {createdDate}
            </span>
            <span style={{
              fontSize: 20,
              color: 'hsla(0,0%,100%,.6)',
            }}>
              * {timeToRead}
            </span>
          </div>}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1',
            gap: '10px',
          }}>
            <div
              style={{
                display: 'flex',
                fontSize: 40,
                lineHeight: 1.25,
                width: '100%',
                fontFamily: `'merriweather', sans-serif`,
              }}
            >
              {title}
            </div>
            {description && <div
              style={{
                display: 'flex',
                fontSize: 20,
                lineHeight: 1,
                width: '100%',
                fontFamily: `'merriweather', sans-serif`,
                color: 'hsla(0,0%,100%,.6)',
              }}
            >
              {description}
            </div>}
            {tags && <div
              style={{
                display: 'flex',
                gap: '5px',
                color: '#70b5f9',
                fontSize: 20,
                fontFamily: `'monospace', sans-serif`,
                paddingBottom: '10px'
              }}
            >
              {tags?.map((tag: string, index: number) => <div key={`tag-${index}`}>{`#${tag}`}</div>)}
            </div>}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: '10px',
              lineHeight: 1.25,
            }}
          >
            <img src="https://avatars.githubusercontent.com/u/28431254?s=40&v=4" width="24" height="24" style={{
              borderRadius: '50%',
            }} />
            <span
              style={{
                width: 12,
                height: 24,
                background: '#f44336',
              }}
            />
            <span
              style={{
                fontSize: 26,
                fontFamily: 'Bangers, sans-serif',
              }}
            >
              Bill Tech Ký Sự
            </span>
          </div>
        </div>

      ),
      {
        width: 800,
        height: 400,
        fonts: [
          {
            name: 'Bangers',
            data: bangerFontData,
          },
          {
            name: 'monospace',
            data: monospaceFontData,
          },
          {
            name: 'merriweather',
            data: merriweatherFontData,
          }
        ]
      },
    );
  }
  catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
