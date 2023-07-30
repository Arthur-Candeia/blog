export function handleUpload() {
  if (document.forms[0]['file'].files.length > 0) {
    const upload = document.querySelector('label')
    if (upload) {   
      upload.style.border = '2px solid #00ff88'
      upload.style.color = '#00ff88'
      upload.innerText = 'Upload Realizado'
    }
  }
}