export class PdfInfo {
    title!: string;
    field_sirur_date!: string;
    field_sirur_details!: string;
    field_sirur_id!: string;
    field_sirur_image!: string;
    download_url!: string;
    field_sirur_title!: string;

    update(params: string) {
        console.log('not implemented');
    }
    map(virtualLibrary: any) {
        this.field_sirur_title = virtualLibrary.field_virtual_library_name;
        this.download_url = virtualLibrary.field_virtual_library_pdf;
        this.field_sirur_date = virtualLibrary.field_virtual_library_date;
    }
}