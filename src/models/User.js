class User {
  constructor({
    id,
    username,
    name,
    email,
    role,
    avatar = null,
    location = '',
    bio = '',
    socialLinks = {},
    lastLogin = null,
    createdAt = new Date(),
  }) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.role = role;
    this.avatar = avatar;
    this.location = location;
    this.bio = bio;
    this.socialLinks = socialLinks;
    this.lastLogin = lastLogin;
    this.createdAt = createdAt;
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      location: this.location,
      bio: this.bio,
      socialLinks: this.socialLinks,
      lastLogin: this.lastLogin,
      createdAt: this.createdAt,
    };
  }
}

export default User; 