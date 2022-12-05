class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token

  validates :username, 
    uniqueness: true, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255, message: "Hmm...that doesn't look like an email address" }, 
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "Hmm...that doesn't look like an email address" }
  validates :age, 
    numericality: {in:13..110, message: "Sorry, you’re not eligible to sign up for Pinsly right now" }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255, message: "Your password is too short! You need 6+ characters." }, allow_nil: true

  def self.find_by_credentials(credential, password)
    # user = credential.match?(URI::MailTo::EMAIL_REGEXP) ? User.find_by(email: credential) : User.find_by(username: credential)
    user = User.find_by(email: credential)
    return nil if user.nil?

    user.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      session_token = SecureRandom::urlsafe_base64(16)
      return session_token unless User.exists?(session_token: session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
