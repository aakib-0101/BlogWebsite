import React from 'react'
import { Link, useParams } from 'react-router-dom'

const posts = [
  {
    slug: 'how-technology-is-changing-the-way-we-live',
    category: 'technology',
    title: 'How Technology Is Changing the Way We Live',
    excerpt:
      'A closer look at how modern technology is reshaping our everyday lives, work, and the way we connect.',
    date: 'September 5, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'the-art-of-slowing-down',
    category: 'lifestyle',
    title: 'The Art of Slowing Down',
    excerpt:
      'In a world that never seems to stop, perhaps learning to pause is the most valuable skill of all.',
    date: 'September 3, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'why-curiosity-still-matters',
    category: 'ideas',
    title: 'Why Curiosity Still Matters',
    excerpt:
      'Good questions have the power to change how we see the world — and ourselves.',
    date: 'September 1, 2026',
    readTime: '4 min read',
  },
]

const Category = () => {
  const { category } = useParams()

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1)

  const categoryPosts = posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )

  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        minHeight: 'calc(100vh - 70px)',
        padding: '80px 24px',
        color: '#1c1917',
      }}
    >
      <div
        style={{
          maxWidth: '1050px',
          margin: '0 auto',
        }}
      >
        {/* Back */}
        <Link
          to="/stories"
          style={{
            display: 'inline-block',
            marginBottom: '45px',
            color: '#78716c',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          ← All Stories
        </Link>

        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid #ded7cd',
            paddingBottom: '42px',
            marginBottom: '50px',
          }}
        >
          <p
            style={{
              margin: '0 0 15px',
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#b45309',
              fontWeight: '700',
            }}
          >
            Category
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(42px, 6vw, 72px)',
              lineHeight: '1',
              letterSpacing: '-2px',
            }}
          >
            {formattedCategory}
          </h1>

          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '650px',
              color: '#78716c',
              fontSize: '18px',
              lineHeight: '1.7',
            }}
          >
            Stories, ideas, and perspectives from the {category} section of
            InkSpace.
          </p>
        </div>

        {/* Posts */}
        {categoryPosts.length > 0 ? (
          <div>
            {categoryPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  padding: '0 0 38px',
                  marginBottom: '38px',
                  borderBottom: '1px solid #ded7cd',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'center',
                    marginBottom: '15px',
                    fontSize: '13px',
                    color: '#78716c',
                  }}
                >
                  <span
                    style={{
                      color: '#b45309',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {post.category}
                  </span>

                  <span>•</span>

                  <span>{post.date}</span>

                  <span>•</span>

                  <span>{post.readTime}</span>
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
                      margin: '0 0 14px',
                      fontFamily: 'Georgia, serif',
                      fontSize: 'clamp(26px, 4vw, 40px)',
                      lineHeight: '1.15',
                      letterSpacing: '-0.8px',
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p
                  style={{
                    margin: 0,
                    maxWidth: '720px',
                    color: '#78716c',
                    fontSize: '16px',
                    lineHeight: '1.7',
                  }}
                >
                  {post.excerpt}
                </p>

                <Link
                  to={`/stories/${post.slug}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    color: '#1c1917',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '700',
                  }}
                >
                  Read story →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '60px 0',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '32px',
                marginBottom: '12px',
              }}
            >
              No stories yet
            </h2>

            <p
              style={{
                color: '#78716c',
                fontSize: '16px',
              }}
            >
              We haven't published anything in this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Category