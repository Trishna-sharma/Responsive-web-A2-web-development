
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openSidebar').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('active');
    });

    document.getElementById('closeSidebarIcon').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('active');
    });  // to play the sidebar
});


let clickedData = ""; // Variable to store clicked data

function showInstructions(instructions, priceRange, imageURL) {
  document.getElementById('instructionOverlay').style.display = 'block';
  document.getElementById('realPageContent').style.display = 'none';
  document.getElementById('instructionText').textContent = instructions; // Display instructions
  document.getElementById('priceRange').textContent = `Price Range: ${priceRange}`; // Display price range
  document.getElementById('instructionImage').src = imageURL; // Set image source
  clickedData = instructions; // Store clicked data in a variable
}

function hideInstructions() {
  document.getElementById('instructionOverlay').style.display = 'none';
  document.getElementById('realPageContent').style.display = 'block';
}

function saveAndHide() {
  hideInstructions(); // Hide the overlay
  document.getElementById('clickedData').textContent = `Clicked Data: ${clickedData}`; // Display clicked data on the screen
}

function showContactOverlay() {
  document.getElementById('instructionOverlay').style.display = 'none';
  document.getElementById('contactOverlay').style.display = 'block';
}

function hideContactOverlay() {
  document.getElementById('contactOverlay').style.display = 'none';
} //to play the instruction logic


//play the dragging logic
let isDragging = false;

function dragImage1() {
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  
  image1.style.width = '100%';
  image2.style.width = '0';
  
  isDragging = true;
}

function dragImage2() {
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  
  image1.style.width = '0';
  image2.style.width = '100%';
  
  isDragging = true;
}

document.addEventListener('mouseup', function() {
  if (isDragging) {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const image4 = document.getElementById('image4');
    const image5 = document.getElementById('image5');
    const image6 = document.getElementById('image6');
    const image7 = document.getElementById('image7');
    const image8 = document.getElementById('image8');
  
    image1.style.width = ''; // Set back to default or initial width
    image2.style.width = ''; // Set back to default or initial width
    image3.style.width = ''; // Set back to default or initial width
    image4.style.width = ''; // Set back to default or initial width
    image5.style.width = ''; // Set back to default or initial width
    image6.style.width = ''; // Set back to default or initial width
    image7.style.width = ''; // Set back to default or initial width
    image8.style.width = ''; // Set back to default or initial width
    
    isDragging = false;
  }
});


function dragImage3() {
  const image3 = document.getElementById('image3');
  const image4 = document.getElementById('image4');
  
  image3.style.width = '100%';
  image4.style.width = '0';

  isDragging = true;
}

function dragImage4() {
  const image3 = document.getElementById('image3');
  const image4 = document.getElementById('image4');
  
  image3.style.width = '0';
  image4.style.width = '100%';

  isDragging = true;
}


function dragImage5() {
  const image5 = document.getElementById('image5');
  const image6 = document.getElementById('image6');
  
  image5.style.width = '100%';
  image6.style.width = '0';

  isDragging = true;
}

function dragImage6() {
  const image5 = document.getElementById('image5');
  const image6 = document.getElementById('image6');
  
  image5.style.width = '0';
  image6.style.width = '100%';

  isDragging = true;
}


function dragImage7() {
  const image7 = document.getElementById('image7');
  const image8 = document.getElementById('image8');
  
  image7.style.width = '100%';
  image8.style.width = '0';

  isDragging = true;
}

function dragImage8() {
  const image7 = document.getElementById('image7');
  const image8 = document.getElementById('image8');
  
  image7.style.width = '0';
  image8.style.width = '100%';

  isDragging = true;
}
