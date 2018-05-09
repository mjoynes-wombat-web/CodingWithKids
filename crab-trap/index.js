function animateLeg() {
  console.log('test');
  const firstLeftLeg = document.querySelector('#first-left-leg');
  firstLeftLeg.firstJoint = firstLeftLeg.querySelector('#first-joint');

  console.log(firstLeftLeg.firstJoint.getBoundingClientRect());
}

window.addEventListener('load', animateLeg);
