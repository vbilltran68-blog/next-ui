/* eslint-disable @next/next/no-img-element */
import appConfig from '@root/app.config.json'
import { ImageResponse } from 'next/server'

// Font
const fetchFont = (fontURL: string) => fetch(
  new URL(fontURL, import.meta.url),
).then((res) => res.arrayBuffer())

const bangerFont = fetchFont(`${process.env.APP_URL}/fonts/bangers/Bangers-Regular.ttf`)
const monospaceFont = fetchFont(`${process.env.APP_URL}/fonts/space-mono/SpaceMono-Bold.ttf`)
const merriweatherFont = fetchFont(`${process.env.APP_URL}/fonts/merri-weather/Merriweather-Bold.ttf`)


type GenerateImageProps = {
  title: string;
  description: string;
  tags?: string[];
  createdAt?: string;
  timeToRead?: string;
}

// Image generation
export async function GenerateImage({ title, description, tags, createdAt, timeToRead }: GenerateImageProps) {
  const [
    bangerFontData,
    monospaceFontData,
    merriweatherFontData,
  ] = await Promise.all([
    bangerFont,
    monospaceFont,
    merriweatherFont,
  ])

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          padding: '50px 60px',
          letterSpacing: '-.02em',
          fontWeight: 'bolder',
          background: '#2c2c2c',
          color: '#fff',
          fontFamily: `'monospace', sans-serif`,
          gap: '10px',
        }}
      >
        {createdAt && timeToRead && <div style={{
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
            {createdAt.toString()}
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
              fontSize: 18,
              lineHeight: 1.25,
              width: '100%',
              fontFamily: `'monospace', sans-serif`,
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
          <img src={appConfig.icon} width="24" height="24" style={{
            borderRadius: '50%',
          }} alt="avatar" />
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
            {appConfig.title}
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
  )
}
