
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        minHeight: 'calc(100vh - 80px)',
        color: '#1c1917',
      }}
    >
      {/* Hero */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '95px 28px 75px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            margin: '0 0 18px',
            color: '#b45309',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          About InkSpace
        </p>

        <h1
          style={{
            margin: 0,
            fontFamily: 'Georgia, serif',
            fontSize: '58px',
            lineHeight: '1.1',
            letterSpacing: '-2px',
          }}
        >
          A place for ideas that
          <br />
          <span style={{ color: '#b45309' }}>deserve to be heard.</span>
        </h1>

        <p
          style={{
            maxWidth: '680px',
            margin: '28px auto 0',
            color: '#78716c',
            fontSize: '18px',
            lineHeight: '1.8',
          }}
        >
          InkSpace is an independent corner of the internet built for people
          who love stories, ideas, conversations, and the simple art of
          putting thoughts into words.
        </p>
      </section>

      {/* Main Story */}
      <section
        style={{
          maxWidth: '1144px',
          margin: '0 auto',
          padding: '0 28px 80px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.8fr 1.2fr',
            gap: '70px',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              backgroundColor: '#1c1917',
              color: '#fff',
              padding: '42px',
              borderRadius: '8px',
              minHeight: '330px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
            }}
          >
            <span
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '64px',
                lineHeight: 1,
                color: '#d6a15c',
              }}
            >
              “
            </span>

            <p
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '27px',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              Everyone has a story. Some just need a place to tell it.
            </p>
          </div>

          <div>
            <p
              style={{
                margin: '0 0 12px',
                color: '#b45309',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              Our Story
            </p>

            <h2
              style={{
                margin: '0 0 22px',
                fontFamily: 'Georgia, serif',
                fontSize: '38px',
                lineHeight: '1.2',
              }}
            >
              Why InkSpace exists
            </h2>

            <p
              style={{
                color: '#57534e',
                fontSize: '16px',
                lineHeight: '1.9',
                margin: '0 0 18px',
              }}
            >
              The internet is full of information. InkSpace was created for
              something a little different — meaningful writing.
            </p>

            <p
              style={{
                color: '#57534e',
                fontSize: '16px',
                lineHeight: '1.9',
                margin: '0 0 18px',
              }}
            >
              We believe a good article doesn't simply give you something to
              read. It gives you something to think about. It can introduce
              you to a new perspective, make you laugh, teach you something,
              or simply make you feel understood.
            </p>

            <p
              style={{
                color: '#57534e',
                fontSize: '16px',
                lineHeight: '1.9',
                margin: 0,
              }}
            >
              That's what we're trying to build here — a collection of
              thoughtful stories written by curious people.
            </p>
          </div>
        </div>
      </section>

      {/* What We Write */}
      <section
        style={{
          backgroundColor: '#ebe4da',
          padding: '75px 28px',
        }}
      >
        <div
          style={{
            maxWidth: '1144px',
            margin: '0 auto',
          }}
        >
          <div style={{ marginBottom: '38px' }}>
            <p
              style={{
                margin: '0 0 10px',
                color: '#b45309',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              What You'll Find
            </p>

            <h2
              style={{
                margin: 0,
                fontFamily: 'Georgia, serif',
                fontSize: '40px',
              }}
            >
              A little bit of everything.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '18px',
            }}
          >
            {[
              ['01', 'Ideas', 'Thoughts that challenge the way you see things.'],
              ['02', 'Stories', 'Personal experiences, observations, and journeys.'],
              ['03', 'Perspectives', 'Different voices and different ways of looking at life.'],
            ].map(([number, title, description]) => (
              <div
                key={number}
                style={{
                  backgroundColor: '#f7f3ed',
                  border: '1px solid #ddd4c8',
                  borderRadius: '8px',
                  padding: '30px',
                }}
              >
                <span
                  style={{
                    color: '#b45309',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}
                >
                  {number}
                </span>

                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '25px',
                    margin: '18px 0 10px',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    color: '#78716c',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    margin: 0,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: '90px 28px 100px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            margin: '0 0 18px',
            fontFamily: 'Georgia, serif',
            fontSize: '40px',
            lineHeight: '1.2',
          }}
        >
          Have something to say?
        </h2>

        <p
          style={{
            color: '#78716c',
            fontSize: '16px',
            lineHeight: '1.7',
            marginBottom: '28px',
          }}
        >
          Great stories start with a simple idea. Explore InkSpace and find
          something that speaks to you.
        </p>

        <Link
          to="/"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            backgroundColor: '#1c1917',
            color: '#fff',
            padding: '13px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          Explore Stories →
        </Link>
      </section>
    </main>
  )
}

export default About

