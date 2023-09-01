// Sample data for available slots (replace with actual slot counts)
let comedySlots = 10;
let laughSlots = 15;
let onlineSlots = 20;

// Function to book a ticket and update slot count
function bookTicket(eventId) {
    const slotsElement = document.getElementById(eventId);
    const slotsRemaining = parseInt(slotsElement.textContent);

    if (slotsRemaining > 0) {
        // Reduce the slot count by 1
        slotsElement.textContent = slotsRemaining - 1 + ' Slots Remaining';
        alert('Ticket booked successfully!'); // You can replace this with your booking logic
    } else {
        alert('Sorry, all slots are booked for this event.');
    }
}

// JavaScript to scroll to the "Videos" section when the "Watch Videos" button is clicked
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const videosSection = document.getElementById('videos');
    videosSection.scrollIntoView({ behavior: 'smooth' });
});

// Function to load videos dynamically (remains the same as before)
function loadVideos() {
    const videoContainer = document.querySelector('.video-container');
    
    // Clear the existing content
    videoContainer.innerHTML = '';

    // Create and append iframe elements for the videos
    videoUrls.forEach(videoUrl => {
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.frameborder = 0;
        iframe.allowfullscreen = true;
        videoContainer.appendChild(iframe);
    });
}

// Add an event listener to load videos when the "Videos" section is clicked
const videosSection = document.getElementById('videos');
videosSection.addEventListener('click', loadVideos);
