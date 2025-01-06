
    <script>
        // Get references to the image and audio elements
        const image = document.getElementById('logo');
        const audio = document.getElementById('audio');


        image.addEventListener('click', () => {
        if (audio.paused) {
        audio.play()
        .catch(error => {
        console.error("Error playing audio:", error);
    });
    } else {
        audio.currentTime = 0; //
        audio.play();
    }
    });
    </script>
