import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export function dowloadPdf(id: string) {
    const menuElement: HTMLElement | null = document.getElementById(id);

    html2canvas(menuElement as HTMLElement).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust the dimensions according to your needs.
        pdf.save('menu.pdf');
    });
}

