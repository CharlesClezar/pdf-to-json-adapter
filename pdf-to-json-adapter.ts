class JsonService {
    getJsonData(): string {
        return '{"message": "Este é um dado JSON"}';
    }
}

class PdfService {
    getPdfData(): string {
        return "Este é um dado em PDF";
    }
}

class DataClient {
    constructor(private jsonService: JsonService) {}

    displayData() {
        const data = this.jsonService.getJsonData();
        console.log(`Dados recebidos: ${data}`);
    }
}

class PdfToJsonAdapter extends JsonService {
    constructor(private pdfService: PdfService) {
        super();
    }

    getJsonData(): string {
        const pdfData = this.pdfService.getPdfData();
        return `{"message": "${pdfData}"}`;
    }
}

const pdfService = new PdfService();
const pdfAdapter = new PdfToJsonAdapter(pdfService);

const dataClient = new DataClient(pdfAdapter);
dataClient.displayData();