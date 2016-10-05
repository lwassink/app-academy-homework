# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    session[:session_token] ||= SecureRandom.urlsafe_base64
    session[:session_token]
  end

  def reset_session_token!
    session[:session_token] = SecureRandom.urlsafe_base64
    self.save
  end

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end

