import React from 'react'
import { Link, useParams } from 'react-router-dom'

const posts = [
  {
    slug: 'how-technology-is-changing-the-way-we-live',
    category: 'Technology',
    title: 'How Technology Is Changing the Way We Live',
    excerpt:
      'A closer look at how modern technology is reshaping our everyday lives, work, and the way we connect.',
    date: 'September 5, 2026',
    readTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Technology has become so deeply woven into everyday life that it can be easy to forget just how much the world around us has changed. From the moment we wake up to the time we go to sleep, digital tools quietly shape the way we work, communicate, travel, learn, and relax.',
      },
      {
        type: 'heading',
        text: 'A world that moves faster',
      },
      {
        type: 'paragraph',
        text: 'The biggest change may not be any single invention, but the speed at which information now moves. A message that once took days can cross the world in seconds. Ideas can reach millions of people almost instantly, and access to knowledge is no longer limited by geography in the way it once was.',
      },
      {
        type: 'paragraph',
        text: 'This speed has created enormous opportunities. Small businesses can reach customers across the world. Students can learn from people and institutions thousands of kilometres away. Families separated by distance can remain connected through a screen.',
      },
      {
        type: 'heading',
        text: 'Technology and everyday life',
      },
      {
        type: 'paragraph',
        text: 'Some of the most important technological changes are also the least dramatic. Digital payments, navigation apps, online services, cloud storage, and smart devices have gradually become ordinary parts of daily life.',
      },
      {
        type: 'paragraph',
        text: 'The result is a world where many tasks require less time and effort than they once did. But convenience also creates a new challenge: deciding what deserves our attention.',
      },
      {
        type: 'heading',
        text: 'The human side of progress',
      },
      {
        type: 'paragraph',
        text: 'Technology is ultimately a tool. Its value depends on how thoughtfully we use it. The goal should not simply be to make everything faster, but to use technology to create more meaningful ways of living, working, and connecting.',
      },
      {
        type: 'paragraph',
        text: 'As technology continues to evolve, perhaps the most important question is not what it can do next, but what we want it to help us become.',
      },
    ],
  },

  {
    slug: 'the-art-of-slowing-down',
    category: 'Lifestyle',
    title: 'The Art of Slowing Down',
    excerpt:
      'In a world that never seems to stop, perhaps learning to pause is the most valuable skill of all.',
    date: 'September 3, 2026',
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: 'We live in a culture that often celebrates movement. Being busy can feel like a measure of importance, and slowing down can sometimes feel like falling behind.',
      },
      {
        type: 'heading',
        text: 'Why we are always rushing',
      },
      {
        type: 'paragraph',
        text: 'There is always another message to answer, another task to complete, and another destination to reach. Over time, constant activity can become a habit rather than a necessity.',
      },
      {
        type: 'paragraph',
        text: 'Slowing down does not mean abandoning ambition. It means creating enough space to notice what is happening while we are busy trying to make something happen.',
      },
      {
        type: 'heading',
        text: 'Finding space for stillness',
      },
      {
        type: 'paragraph',
        text: 'A quiet walk, an uninterrupted conversation, a few pages of a book, or simply sitting without reaching for a phone can feel surprisingly difficult at first.',
      },
      {
        type: 'paragraph',
        text: 'But small pauses can change the rhythm of an entire day. They give our attention somewhere to settle and remind us that not every moment needs to be productive.',
      },
    ],
  },

  {
    slug: 'why-curiosity-still-matters',
    category: 'Ideas',
    title: 'Why Curiosity Still Matters',
    excerpt:
      'Good questions have the power to change how we see the world — and ourselves.',
    date: 'September 1, 2026',
    readTime: '4 min read',
    content: [
      {
        type: 'paragraph',
        text: 'Curiosity begins with a simple feeling: there is something here I do not understand yet. It is one of the most natural human instincts, and one of the easiest to lose as we grow older.',
      },
      {
        type: 'heading',
        text: 'The power of a good question',
      },
      {
        type: 'paragraph',
        text: 'Questions force us to pause before accepting an answer. They make us look again, consider another possibility, and remain open to being wrong.',
      },
      {
        type: 'paragraph',
        text: 'Some of the biggest discoveries in science, art, business, and everyday life have started with someone asking a question that seemed obvious only in hindsight.',
      },
      {
        type: 'heading',
        text: 'Staying curious',
      },
      {
        type: 'paragraph',
        text: 'Curiosity does not require extraordinary circumstances. It can begin with a conversation, a book, a new skill, or simply paying closer attention to the world around us.',
      },
      {
        type: 'paragraph',
        text: 'The more questions we ask, the more possibilities we notice. And sometimes, the question itself is more valuable than the answer.',
      },
    ],
  },
]

const Blog = () => {
  const { slug } = useParams()

  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <main
        style={{
          minHeight: 'calc(100vh - 70px)',
          backgroundColor: '#f7f3ed',
          padding: '100px 24px',
          textAlign: 'center',
          color: '#1c1917',
        }}
      >
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '48px',
            marginBottom: '15px',
          }}
        >
          Story not found
        </h1>

        <p
          style={{
            color: '#78716c',
            marginBottom: '30px',
          }}
        >
          The story you're looking for doesn't exist.
        </p>

        <Link
          to="/stories"
          style={{
            color: '#1c1917',
            fontWeight: '700',
            textDecoration: 'none',
          }}
        >
          ← Back to Stories
        </Link>
      </main>
    )
  }

  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        minHeight: 'calc(100vh - 70px)',
        color: '#1c1917',
      }}
    >
      {/* Article Header */}
      <header
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '90px 24px 70px',
        }}
      >
        <Link
          to="/stories"
          style={{
            display: 'inline-block',
            marginBottom: '50px',
            color: '#78716c',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
          }}
        >
          ← All Stories
        </Link>

        <div
          style={{
            marginBottom: '22px',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#b45309',
          }}
        >
          {post.category}
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(42px, 7vw, 76px)',
            lineHeight: '1.03',
            letterSpacing: '-2.5px',
            fontWeight: '700',
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            maxWidth: '720px',
            margin: '30px 0 25px',
            fontSize: '20px',
            lineHeight: '1.65',
            color: '#78716c',
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            color: '#78716c',
            fontSize: '14px',
          }}
        >
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Divider */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          borderTop: '1px solid #ded7cd',
        }}
      />

      {/* Article Content */}
      <article
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '65px 24px 100px',
        }}
      >
        {post.content.map((block, index) => {
          if (block.type === 'heading') {
            return (
              <h2
                key={index}
                style={{
                  margin: '48px 0 20px',
                  fontFamily: 'Georgia, serif',
                  fontSize: '32px',
                  lineHeight: '1.25',
                  letterSpacing: '-0.5px',
                }}
              >
                {block.text}
              </h2>
            )
          }

          return (
            <p
              key={index}
              style={{
                margin: '0 0 25px',
                fontSize: '18px',
                lineHeight: '1.9',
                color: '#3f3a36',
              }}
            >
              {block.text}
            </p>
          )
        })}

        {/* End of article */}
        <div
          style={{
            marginTop: '70px',
            paddingTop: '30px',
            borderTop: '1px solid #ded7cd',
          }}
        >
          <Link
            to="/stories"
            style={{
              color: '#1c1917',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            ← Explore more stories
          </Link>
        </div>
      </article>
    </main>
  )
}

export default Blog