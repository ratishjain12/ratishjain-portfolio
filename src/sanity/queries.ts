export const projectsQuery = `*[_type == "project"] | order(order asc){
  title,
  href,
  description,
  technologies,
  links,
  "image": coalesce(imageUpload.asset->url, image),
  "video": coalesce(videoUpload.asset->url, video)
}`;

export const certificationsQuery = `*[_type == "certification"] | order(order asc){
  title,
  issuer,
  href,
  "logoUrl": logo.asset->url,
  date,
  credentialId,
  description
}`;

export const workExperienceQuery = `*[_type == "workExperience"] | order(order asc){
  company,
  href,
  badges,
  location,
  title,
  "logoUrl": logo.asset->url,
  start,
  end,
  description
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  heroName,
  heroTagline,
  heroBio,
  "profileImageUrl": profileImage.asset->url,
  bookingUrl,
  bookingLabel,
  "avatarUrl": avatarUrl.asset->url,
  skills,
  contactEmail,
  contactTel,
  socialLinks,
  navbarItems
}`;
