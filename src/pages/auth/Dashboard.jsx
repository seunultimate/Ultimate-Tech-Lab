import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_utl.png'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  

  // ✅ Check if user is logged in
useEffect(() => {
  const currentUser = localStorage.getItem('utl_current_user')
  if (!currentUser) {
    navigate('/login')
    return
  }
  const parsed = JSON.parse(currentUser)
  // eslint-disable-next-line
  setUser(parsed)
}, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('utl_current_user')
    navigate('/')
  }

  // ✅ Dashboard tabs
  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'orders', label: 'Orders', icon: '🛒' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  // ✅ Quick stats
  const stats = [
    { label: 'Active Projects', value: '0', icon: '💼', color: 'bg-blue-50 text-blue-600' },
    { label: 'Pending Orders', value: '0', icon: '🛒', color: 'bg-orange-50 text-orange-600' },
    { label: 'Messages', value: '0', icon: '💬', color: 'bg-green-50 text-green-600' },
    { label: 'Notifications', value: '0', icon: '🔔', color: 'bg-purple-50 text-purple-600' },
  ]

  if (!user) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Sidebar */}
      <div className="w-64 bg-[#0a0f2c] flex flex-col fixed h-full">

        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="UTL" className="h-10 w-auto rounded-lg" />
            <div>
              <div className="text-white font-black text-xs">ULTIMATE</div>
              <div className="text-green-400 font-bold text-[10px] tracking-widest">TECH LAB</div>
            </div>
          </Link>
        </div>

        {/* User info */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
            <div>
              <p className="text-white text-sm font-bold">{user.firstName} {user.lastName}</p>
              <p className="text-gray-400 text-xs capitalize">{user.accountType}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
          >
            <span>🏠</span> Back to Website
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-white hover:bg-red-600 text-sm font-medium transition-all"
          >
            <span>🚪</span> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              {activeTab === 'overview' && `Welcome back, ${user.firstName}! 👋`}
              {activeTab === 'projects' && 'My Projects 💼'}
              {activeTab === 'orders' && 'My Orders 🛒'}
              {activeTab === 'messages' && 'Messages 💬'}
              {activeTab === 'settings' && 'Account Settings ⚙️'}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
              🔔
            </button>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
              {user.firstName?.[0]}{user.lastName?.[0]}
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">

            {/* Stats */}
            <div className="grid grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-gray-900 font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Request a Service', icon: '💼', link: '/contact', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
                  { label: 'Browse Shop', icon: '🛒', link: '/shop', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700' },
                  { label: 'View Crypto Prices', icon: '💰', link: '/services/crypto', color: 'bg-green-50 hover:bg-green-100 text-green-700' },
                  { label: 'Read Blog', icon: '📝', link: '/blog', color: 'bg-purple-50 hover:bg-purple-100 text-purple-700' },
                  { label: 'Contact Support', icon: '💬', link: '/contact', color: 'bg-gray-50 hover:bg-gray-100 text-gray-700' },
                  { label: 'View Portfolio', icon: '🎨', link: '/portfolio', color: 'bg-pink-50 hover:bg-pink-100 text-pink-700' },
                ].map((action) => (
                  <Link
                    key={action.label}
                    to={action.link}
                    className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${action.color}`}
                  >
                    <span className="text-xl">{action.icon}</span>
                    <span className="text-sm font-semibold">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Account info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-gray-900 font-bold mb-4">Account Information</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Full Name', value: `${user.firstName} ${user.lastName}` },
                  { label: 'Email', value: user.email },
                  { label: 'Phone', value: user.phone },
                  { label: 'Account Type', value: user.accountType },
                  { label: 'Member Since', value: new Date(user.createdAt).toLocaleDateString() },
                  { label: 'Account Status', value: 'Active ✅' },
                ].map((info) => (
                  <div key={info.label} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-400 text-xs font-semibold uppercase mb-1">{info.label}</p>
                    <p className="text-gray-900 text-sm font-semibold capitalize">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <div className="text-6xl mb-4">💼</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">No Projects Yet</h3>
            <p className="text-gray-500 mb-6">You haven't started any projects with us yet. Let's change that!</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors"
            >
              Start a Project →
            </Link>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">No Orders Yet</h3>
            <p className="text-gray-500 mb-6">You haven't placed any orders yet. Browse our shop!</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-400 transition-colors"
            >
              Browse Shop →
            </Link>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-black text-gray-900 mb-2">No Messages Yet</h3>
            <p className="text-gray-500 mb-6">Your messages with our team will appear here.</p>
            <a
              href="https://wa.me/2348038786037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-gray-900 font-bold mb-6">Account Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Edit Profile', desc: 'Update your name, email and phone', icon: '👤' },
                { label: 'Change Password', desc: 'Update your account password', icon: '🔒' },
                { label: 'Notifications', desc: 'Manage your notification preferences', icon: '🔔' },
                { label: 'Delete Account', desc: 'Permanently delete your account', icon: '🗑️', danger: true },
              ].map((setting) => (
                <button
                  key={setting.label}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                    setting.danger
                      ? 'border-red-100 hover:bg-red-50 text-red-600'
                      : 'border-gray-100 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{setting.icon}</span>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{setting.label}</p>
                      <p className="text-gray-400 text-xs">{setting.desc}</p>
                    </div>
                  </div>
                  <span className="text-gray-300">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard