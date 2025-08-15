export const onDownload = () => {
  const link = document.createElement('a')
  link.href = '/Resume.pdf' // make sure your resume is placed in /public/resume.pdf
  link.download = 'AbdulMannan_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
