// funcion para formatear fecha y colocarla en formato dd/mm/aa

export function formatDate(timestamp: string): string {
    const date = new Date(parseInt(timestamp));
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    return formattedDate;
  }

export function formatDateCustom(timestamp: string): string {
    const date = new Date(parseInt(timestamp));
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().substr(2, 2);
    return `${day}/${month}/${year}`;
  }
