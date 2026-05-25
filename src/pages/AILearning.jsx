import { Link, useNavigate } from 'react-router-dom'

function AILearning() {
  const navigate = useNavigate()

  const handleEnroll = (course) => {
    const user = localStorage.getItem('utl_current_user')
    if (!user) {
      navigate('/signup?role=learner')
    } else {
      navigate('/dashboard?tab=mentorship')
    }
  }

  const courses = [
    {
      icon: '🤖',
      title: 'AI Fundamentals',
      desc: 'Understand what AI is, how it works and how to use it in your daily life and business.',
      lessons: ['What is AI?', 'How ChatGPT works', 'Prompt Engineering basics', 'AI tools for productivity'],
      level: 'Beginner',
      duration: '2 weeks',
      color: 'blue',
    },
    {
      icon: '💬',
      title: 'Master Prompt Engineering',
      desc: 'Learn to write powerful prompts that get the best results from Claude, ChatGPT and other AI models.',
      lessons: ['Prompt structure', 'Advanced techniques', 'Role-based prompting', 'Real world use cases'],
      level: 'Intermediate',
      duration: '3 weeks',
      color: 'purple',
    },
    {
      icon: '⚡',
      title: 'Build AI Powered Apps',
      desc: 'Use the Claude API to build real AI applications — chatbots, assistants and automation tools.',
      lessons: ['Claude API basics', 'Building a chatbot', 'AI in React apps', 'Deploy your AI app'],
      level: 'Advanced',
      duration: '4 weeks',
      color: 'green',
    },
  ]

  const benefits = [
    { icon: '🎯', title: 'Hands-on Learning', desc: 'Learn by building real projects with Claude AI' },
    { icon: '📱', title: 'Learn at Your Pace', desc: 'Access lessons anytime from any device' },
    { icon: '🏆', title: 'Get Certified', desc: 'Earn a UTL AI certificate on completion' },
    { icon: '💼', title: 'Career Ready', desc: 'AI skills are the most in-demand in 2026' },
  ]

  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      badge: 'bg-blue-100 text-blue-700',
      btn: 'bg-blue-600 hover:bg-blue-500',
      icon: 'bg-blue-100',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-100',
      badge: 'bg-purple-100 text-purple-700',
      btn: 'bg-purple-600 hover:bg-purple-500',
      icon: 'bg-purple-100',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-100',
      badge: 'bg-green-100 text-green-700',
      btn: 'bg-green-600 hover:bg-green-500',
      icon: 'bg-green-100',
    },
  }

  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="bg-[#0a0f2c] py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-300 text-xs font-medium tracking-wide">UTL AI ACADEMY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Become an AI Expert &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
              Build Your Own World
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Learn to use Claude AI, master prompt engineering and build real AI-powered applications.
            The future belongs to those who understand AI — start today!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => handleEnroll('ai')}
              className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-500/30"
            >
              🚀 Start Learning Free →
            </button>
            <a href="https://wa.me/2348038786037?text=Hello! I want to learn AI with UTL"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5">
              💬 Chat with Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '3', label: 'AI Courses' },
              { value: 'Free', label: 'To Start' },
              { value: '100%', label: 'Practical' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-2xl p-4">
                <p className="text-white text-2xl font-black">{stat.value}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-gray-900 font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase mb-3">COURSES</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your AI Path</h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Start from zero or jump to advanced — we have a course for every level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => {
              const c = colorMap[course.color]
              return (
                <div key={course.title}
                  className={`group bg-white border-2 ${c.border} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>

                  {/* Icon */}
                  <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                    {course.icon}
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badge}`}>
                      {course.level}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      ⏱️ {course.duration}
                    </span>
                  </div>

                  <h3 className="text-gray-900 font-black text-xl mb-3">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{course.desc}</p>

                  {/* Lessons */}
                  <ul className="space-y-2 mb-8">
                    {course.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500 text-xs">✓</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleEnroll(course.title)}
                    className={`w-full py-3 ${c.btn} text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 text-sm`}>
                    Enroll Now →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Claude AI Section */}
      <section className="py-20 bg-[#0a0f2c] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Powered by Claude AI
          </h2>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Our AI mentorship is powered by Claude — one of the most advanced AI models in the world.
            You'll learn directly by interacting with Claude, asking questions and building real projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: '💬', title: 'Ask Claude Anything', desc: 'Get instant answers to your AI and tech questions' },
              { icon: '🛠️', title: 'Build With Claude', desc: 'Learn by building real projects using Claude API' },
              { icon: '📚', title: 'Guided Learning', desc: 'Structured lessons designed by our expert team' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleEnroll('claude')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5">
            Start Learning with Claude →
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Ready to become an AI Expert? 🚀
          </h2>
          <p className="text-gray-500 mb-8">
            Join hundreds of students already learning AI with Ultimate Tech Lab.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleEnroll('ai')}
              className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5">
              Get Started Free →
            </button>
            <a href="https://wa.me/2348038786037?text=Hello! I want to learn AI"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all hover:-translate-y-0.5">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AILearning