import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    category: 'Technology',
    title: 'How Technology Is Changing the Way We Live',
    description:
      'A closer look at how modern technology is reshaping our everyday lives, work, and the way we connect.',
    date: 'September 5, 2026',
  },
  {
    category: 'Lifestyle',
    title: 'The Art of Slowing Down',
    description:
      'In a world that never seems to stop, perhaps learning to pause is the most valuable skill of all.',
    date: 'September 3, 2026',
  },
  {
    category: 'Ideas',
    title: 'Why Curiosity Still Matters',
    description:
      'Good questions have the power to change how we see the world — and ourselves.',
    date: 'September 1, 2026',
  },
]

const Home = () => {
  const scrollToStories = (e) => {
    e.preventDefault()

    document.getElementById('latest-stories')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        color: '#1c1917',
        minHeight: '100vh',
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '85px 40px 75px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.8fr',
            gap: '70px',
            alignItems: 'center',
          }}
        >
          {/* Hero Text */}
          <div>
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
              Welcome to InkSpace
            </p>

            <h1
              style={{
                margin: 0,
                fontFamily: 'Georgia, serif',
                fontSize: '68px',
                lineHeight: '1.02',
                letterSpacing: '-3px',
                fontWeight: '700',
              }}
            >
              Stories, ideas
              <br />
              & thoughts
              <br />
              worth <span style={{ color: '#b45309' }}>sharing.</span>
            </h1>

            <p
              style={{
                maxWidth: '650px',
                margin: '28px 0 0',
                color: '#78716c',
                fontFamily: 'Georgia, serif',
                fontSize: '19px',
                lineHeight: '1.8',
              }}
            >
              A space for thoughtful writing, interesting ideas, personal
              stories, and perspectives from people who have something to say.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                marginTop: '35px',
                alignItems: 'center',
              }}
            >
              <a
                href="#latest-stories"
                onClick={scrollToStories}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  backgroundColor: '#1c1917',
                  color: '#ffffff',
                  padding: '14px 23px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  transition: 'transform 0.2s ease',
                }}
              >
                Explore Stories →
              </a>

              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  color: '#44403c',
                  border: '1px solid #d6cec2',
                  padding: '13px 22px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                About InkSpace
              </Link>
            </div>
          </div>

          {/* Hero Side Card */}
          <div
            style={{
              backgroundColor: '#ebe4da',
              border: '1px solid #ded5c8',
              borderRadius: '10px',
              padding: '38px',
              minHeight: '280px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '3px',
                backgroundColor: '#b45309',
                marginBottom: '25px',
              }}
            />

            <h2
              style={{
                margin: 0,
                fontFamily: 'Georgia, serif',
                fontSize: '42px',
                lineHeight: '1.05',
                letterSpacing: '-1.5px',
              }}
            >
              Read.
              <br />
              Think.
              <br />
              <span style={{ color: '#b45309' }}>Reflect.</span>
            </h2>

            <p
              style={{
                margin: '25px 0 0',
                color: '#57534e',
                fontFamily: 'Georgia, serif',
                fontSize: '15px',
                lineHeight: '1.8',
              }}
            >
              Discover stories that make you think, feel, question, and see
              ordinary things differently.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            marginTop: '75px',
            borderTop: '1px solid #ddd5ca',
          }}
        />
      </section>

      {/* ================= LATEST STORIES ================= */}
      <section
        id="latest-stories"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '35px 40px 90px',
          boxSizing: 'border-box',
          scrollMarginTop: '100px',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '35px',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 10px',
                color: '#b45309',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              From the Journal
            </p>

            <h2
              style={{
                margin: 0,
                fontFamily: 'Georgia, serif',
                fontSize: '43px',
                lineHeight: '1.1',
                letterSpacing: '-1.5px',
              }}
            >
              Latest Stories
            </h2>
          </div>

          {/* This will open the separate Stories page */}
          <Link
            to="/stories"
            style={{
              textDecoration: 'none',
              color: '#44403c',
              fontSize: '14px',
              fontWeight: '600',
              paddingBottom: '5px',
              borderBottom: '1px solid #44403c',
            }}
          >
            View all →
          </Link>
        </div>

        {/* Story Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.title}
              style={{
                backgroundColor: '#fbf9f6',
                border: '1px solid #e1d9cf',
                borderRadius: '8px',
                padding: '31px',
                minHeight: '300px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  margin: '0 0 20px',
                  color: '#b45309',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                {post.category}
              </p>

              <h3
                style={{
                  margin: 0,
                  fontFamily: 'Georgia, serif',
                  fontSize: '27px',
                  lineHeight: '1.25',
                  letterSpacing: '-0.5px',
                }}
              >
                {post.title}
              </h3>

              <p
                style={{
                  margin: '18px 0 0',
                  color: '#78716c',
                  fontFamily: 'Georgia, serif',
                  fontSize: '14px',
                  lineHeight: '1.8',
                }}
              >
                {post.description}
              </p>

              <p
                style={{
                  margin: 'auto 0 0',
                  paddingTop: '25px',
                  color: '#a8a29e',
                  fontFamily: 'Georgia, serif',
                  fontSize: '12px',
                }}
              >
                {post.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= EXPLORE SECTION ================= */}
      <section
        style={{
          backgroundColor: '#1c1917',
          color: '#ffffff',
          padding: '80px 40px',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: '0 0 15px',
              color: '#d6a15c',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Explore
          </p>

          <h2
            style={{
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontSize: '45px',
              lineHeight: '1.15',
              letterSpacing: '-1.5px',
            }}
          >
            There is always another
            <br />
            story worth reading.
          </h2>

          <p
            style={{
              maxWidth: '600px',
              margin: '22px auto 0',
              color: '#a8a29e',
              fontFamily: 'Georgia, serif',
              fontSize: '16px',
              lineHeight: '1.8',
            }}
          >
            Explore different perspectives, discover new ideas, and find
            stories that stay with you long after you've finished reading.
          </p>

          <Link
            to="/stories"
            style={{
              display: 'inline-block',
              marginTop: '30px',
              padding: '13px 22px',
              backgroundColor: '#ffffff',
              color: '#1c1917',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            Browse All Stories →
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home