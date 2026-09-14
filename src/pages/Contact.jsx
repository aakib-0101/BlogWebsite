
import React from 'react'

const Contact = () => {
  return (
    <main
      style={{
        backgroundColor: '#f7f3ed',
        minHeight: 'calc(100vh - 80px)',
        color: '#1c1917',
      }}
    >
      {/* Header */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '80px 28px 55px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            margin: '0 0 15px',
            color: '#b45309',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Get In Touch
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
          Let's start a
          <br />
          <span style={{ color: '#b45309' }}>conversation.</span>
        </h1>

        <p
          style={{
            maxWidth: '600px',
            margin: '25px auto 0',
            color: '#78716c',
            fontSize: '17px',
            lineHeight: '1.8',
          }}
        >
          Have a question, feedback, story idea, or simply want to say hello?
          We'd love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '10px 28px 90px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.25fr',
            gap: '25px',
          }}
        >
          {/* Contact Information */}
          <div
            style={{
              backgroundColor: '#1c1917',
              color: '#fff',
              borderRadius: '8px',
              padding: '40px',
              boxSizing: 'border-box',
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span
                style={{
                  color: '#d6a15c',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                Contact Details
              </span>

              <h2
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '32px',
                  lineHeight: '1.25',
                  margin: '18px 0',
                }}
              >
                We'd love to hear from you.
              </h2>

              <p
                style={{
                  color: '#a8a29e',
                  fontSize: '14px',
                  lineHeight: '1.8',
                  margin: 0,
                }}
              >
                Whether you're interested in contributing, have feedback about
                something you've read, or just want to connect, drop us a
                message.
              </p>
            </div>

            <div>
              <div
                style={{
                  borderTop: '1px solid #44403c',
                  paddingTop: '20px',
                  marginTop: '25px',
                }}
              >
                <p
                  style={{
                    margin: '0 0 5px',
                    color: '#78716c',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Email
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                  }}
                >
                  hello@inkspace.com
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid #44403c',
                  paddingTop: '20px',
                  marginTop: '20px',
                }}
              >
                <p
                  style={{
                    margin: '0 0 5px',
                    color: '#78716c',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Response Time
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                  }}
                >
                  Usually within 1–2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              backgroundColor: '#fbf9f6',
              border: '1px solid #e3dbd1',
              borderRadius: '8px',
              padding: '40px',
              boxSizing: 'border-box',
            }}
          >
            <h2
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: '30px',
                margin: '0 0 28px',
              }}
            >
              Send us a message
            </h2>

            <form>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '18px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '8px',
                    }}
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '13px 14px',
                      border: '1px solid #d6cec2',
                      borderRadius: '5px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      marginBottom: '8px',
                    }}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '13px 14px',
                      border: '1px solid #d6cec2',
                      borderRadius: '5px',
                      backgroundColor: '#fff',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '18px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '8px',
                  }}
                >
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What would you like to talk about?"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '13px 14px',
                    border: '1px solid #d6cec2',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginTop: '18px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '8px',
                  }}
                >
                  Message
                </label>

                <textarea
                  rows="7"
                  placeholder="Write your message here..."
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '13px 14px',
                    border: '1px solid #d6cec2',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '22px',
                  width: '100%',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '14px',
                  backgroundColor: '#1c1917',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Quote */}
      <section
        style={{
          backgroundColor: '#ebe4da',
          padding: '55px 28px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            fontFamily: 'Georgia, serif',
            fontSize: '25px',
            lineHeight: '1.5',
            color: '#44403c',
          }}
        >
          “A conversation can be the beginning of a great story.”
        </p>
      </section>
    </main>
  )
}

export default Contact

