const editor = document.getElementById('editor');
const socket = new WebSocket('ws://localhost:3000');

// Send changes to server
editor.addEventListener('input', () => {
    const content = editor.value;
    socket.send(JSON.stringify({
        type: 'edit',
        content
    }));
});

// Receive changes from server
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'edit') {
        editor.value = data.content;
    }
};
