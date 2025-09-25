document.getElementById('descargar').addEventListener('click', async () => {
    const url = new URL('https://cloud12.qemlixio.com/videos/embed/63eDwA9Dvat93wjvouBXz4')
    const res = await fetch(url)
    const blob = await res.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'mi-video.mp4';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadLink.href);

}
)
