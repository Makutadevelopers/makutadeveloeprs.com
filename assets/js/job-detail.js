// Simple form validation and scroll to form for job detail page
document.addEventListener('DOMContentLoaded', function() {
  var applyBtns = document.querySelectorAll('.makuta-job-apply-btn[href^="#application-form"]');
  applyBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var form = document.getElementById('application-form');
      if (form) {
        e.preventDefault();
        form.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  var form = document.querySelector('.makuta-job-application-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var resume = form.querySelector('[name="resume"]');
      if (!name.value || !email.value || !resume.value) {
        alert('Please fill in all required fields and attach your resume.');
        e.preventDefault();
      }
    });
  }
});
