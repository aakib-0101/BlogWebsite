import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const posts = [
  {
    slug: 'how-technology-is-changing-the-way-we-live',
    category: 'technology',
    title: 'How Technology Is Changing the Way We Live',
    excerpt:
      'A closer look at how modern technology is reshaping our everyday lives, work, and the way we connect.',
    date: 'September 5, 2026',
  },
  {
    slug: 'the-art-of-slowing-down',
    category: 'lifestyle',
    title: 'The Art of Slowing Down',
    excerpt:
      'In a world that never seems to stop, perhaps learning to pause is the most valuable skill of all.',
    date: 'September 3, 2026',
  },
  {
    slug: 'why-curiosity-still-matters',
    category: 'ideas',
    title: 'Why Curiosity Still Matters',
    excerpt:
      'Good questions have the power to change how we see the world — and ourselves.',
    date: 'September 1, 2026',
  },
  {
    slug: 'building-a-better-digital-life',
    category: 'technology',
    title: 'Building a Better Digital Life',
    excerpt:
      'Technology can make life easier, but using it intentionally can make life better.',
    date: 'August 29, 2026',
  },
  {
    slug: 'the-quiet-power-of-routine',
    category: 'lifestyle',
    title: 'The Quiet Power of Routine',
    excerpt:
      'Small habits repeated over time can quietly shape the way we live, think, and grow.',
    date: 'August 27, 2026',
  },
  {
    slug: 'what-makes-an-idea-worth-sharing',
    category: 'ideas',
    title: 'What Makes an Idea Worth Sharing?',
    excerpt:
      'Some ideas disappear quickly. Others stay with us and change the way we see things.',
    date: 'August 24, 2026',
  },
  {
    slug: 'living-with-less-noise',
    category: 'lifestyle',
    title: 'Living With Less Noise',
    excerpt:
      'Creating space in a crowded world can help us notice what actually deserves our attention.',
    date: 'August 21, 2026',
  },
  {
    slug: 'the-future-is-already-here',
    category: 'technology',
    title: 'The Future Is Already Here',
    excerpt:
      'The technologies that once felt distant are quietly becoming part of everyday life.',
    date: 'August 18, 2026',
  },
]

const Stories = () => {
  const categoryStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#b45309' : '#78716c',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '10px 16px',
    border: isActive
      ? '1px solid #b45309'
      : '1px solid transparent',
    borderRadius: '2px',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  })

  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        minHeight: 'calc(100vh - 70px)',
        color: '#1c1917',
        padding: '90px 24px 100px',
      }}
    >
      <div
        style={{
          maxWidth: '1170px',
          margin: '0 auto',
        }}
      >
        {/* Back to Home */}
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginBottom: '58px',
            color: '#78716c',
            textDecoration: 'none',
            fontFamily: 'Georgia, serif',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          ← Back to Home
        </Link>

        {/* Page Header */}
        <section
          style={{
            borderBottom: '1px solid #ded7cd',
            paddingBottom: '54px',
          }}
        >
          <p
            style={{
              margin: '0 0 17px',
              color: '#b45309',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
            }}
          >
            The InkSpace Journal
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(56px, 7vw, 82px)',
              lineHeight: '0.98',
              letterSpacing: '-3px',
              fontWeight: '700',
            }}
          >
            All Stories
          </h1>

          <p
            style={{
              maxWidth: '720px',
              margin: '30px 0 0',
              color: '#78716c',
              fontFamily: 'Georgia, serif',
              fontSize: '20px',
              lineHeight: '1.7',
            }}
          >
            Essays, ideas, observations, and stories from people looking at
            the world from different perspectives.
          </p>
        </section>

        {/* Category Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            padding: '25px 0',
            borderBottom: '1px solid #ded7cd',
          }}
        >
          <NavLink
            to="/stories"
            end
            style={categoryStyle}
          >
            All Stories
          </NavLink>

          <NavLink
            to="/stories/category/technology"
            style={categoryStyle}
          >
            Technology
          </NavLink>

          <NavLink
            to="/stories/category/lifestyle"
            style={categoryStyle}
          >
            Lifestyle
          </NavLink>

          <NavLink
            to="/stories/category/ideas"
            style={categoryStyle}
          >
            Ideas
          </NavLink>
        </nav>

        {/* Stories Meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '27px 0',
            borderBottom: '1px solid #ded7cd',
          }}
        >
          <span
            style={{
              color: '#78716c',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
            }}
          >
            {posts.length} stories
          </span>

          <span
            style={{
              color: '#a8a29e',
              fontFamily: 'Georgia, serif',
              fontSize: '14px',
            }}
          >
            Latest first
          </span>
        </div>

        {/* Stories List */}
        <section>
          {posts.map((post, index) => (
            <article
              key={post.slug}
              style={{
                display: 'grid',
                gridTemplateColumns: '105px 1fr 110px',
                gap: '28px',
                alignItems: 'center',
                padding: '36px 0',
                borderBottom: '1px solid #ded7cd',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '25px',
                  color: '#c9c1b7',
                  fontWeight: '500',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Story Content */}
              <div>
                <div
                  style={{
                    marginBottom: '13px',
                    color: '#b45309',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {post.category}
                </div>

                <Link
                  to={`/stories/${post.slug}`}
                  style={{
                    textDecoration: 'none',
                    color: '#1c1917',
                  }}
                >
                  <h2
                    style={{
                      margin: '0 0 12px',
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(25px, 3vw, 34px)',
                      lineHeight: '1.15',
                      letterSpacing: '-1px',
                      fontWeight: '700',
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p
                  style={{
                    maxWidth: '760px',
                    margin: '0 0 15px',
                    color: '#78716c',
                    fontFamily: 'Georgia, serif',
                    fontSize: '15px',
                    lineHeight: '1.65',
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    color: '#aaa39b',
                    fontFamily: 'Georgia, serif',
                    fontSize: '13px',
                  }}
                >
                  {post.date}
                </div>
              </div>

              {/* Read Story */}
              <Link
                to={`/stories/${post.slug}`}
                style={{
                  justifySelf: 'end',
                  color: '#1c1917',
                  textDecoration: 'none',
                  fontFamily: 'Georgia, serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  borderBottom: '1px solid #1c1917',
                  paddingBottom: '7px',
                  whiteSpace: 'nowrap',
                }}
              >
                Read Story →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Stories