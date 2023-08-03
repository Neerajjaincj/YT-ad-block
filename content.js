function clickSkipButton() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
  }
  setTimeout(clickSkipButton, 1000);
}

clickSkipButton();
