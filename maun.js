// Common functionality across pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any common components
    console.log('ReWear app initialized');
    
    // Tag functionality for add item page
    if (document.getElementById('tag-input')) {
        const tagInput = document.getElementById('tag-input');
        const tagsContainer = document.getElementById('tags-container');
        
        tagInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                e.preventDefault();
                addTag(this.value.trim());
                this.value = '';
            }
        });

        function addTag(text) {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `
                ${text}
                <button type="button">&times;</button>
            `;
            tagsContainer.appendChild(tag);
            
            tag.querySelector('button').addEventListener('click', function() {
                tag.remove();
            });
        }
    }
    
    // Image preview for add item page
    if (document.getElementById('item-images')) {
        document.getElementById('item-images').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('preview-image').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Logout button functionality
    const logoutBtns = document.querySelectorAll('#logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if(confirm('Are you sure you want to logout?')) {
                window.location.href = "index.html";
            }
        });
    });
});