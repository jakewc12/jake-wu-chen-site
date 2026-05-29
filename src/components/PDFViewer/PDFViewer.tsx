import Resume from './Jacob_Wu_Chen_Resume_5.29.26.pdf'

const PDFViewer = () => {
 return (
    <iframe
       src={`${Resume}#view=Fit&toolbar=0&navpanes=0&scrollbar=0`}
       title="Jacob Wu-Chen Resume"
       style={{ width: '100%', maxWidth: '850px', aspectRatio: '8.5 / 11', border: 'none', overflow: 'hidden' }}
    />
 );
};
export default PDFViewer;
