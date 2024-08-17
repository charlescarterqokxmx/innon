function navigateToUserProfile(userId) {
  // Assuming you have a route or URL pattern for user profiles
  const userProfileUrl = `/user/profile/${userId}`;
  
  // Redirect the user to their profile page
  window.location.href = userProfileUrl;
}
