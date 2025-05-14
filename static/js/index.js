document.addEventListener('DOMContentLoaded', function () {
  function handleButtonClick(event) {
      const url = event.target.getAttribute('url');
      if (url) {
          window.location.href = url;
      }
  }

  const studentBtn = document.getElementById('student-login-btn');
  const recruiterBtn = document.getElementById('recruiter-login-btn');
  const startBtn = document.getElementById('start-career-btn');

  if (studentBtn) studentBtn.addEventListener('click', handleButtonClick);
  if (recruiterBtn) recruiterBtn.addEventListener('click', handleButtonClick);
  if (startBtn) startBtn.addEventListener('click', handleButtonClick);
});
