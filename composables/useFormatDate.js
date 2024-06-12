export const useFormatDate = (inputDate) => {
    let namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember" 
    ];
    const [hari, bulan, tahun] = inputDate.split('-');
    namaBulan = namaBulan[parseInt(bulan) - 1];

    return `${hari} ${namaBulan} ${tahun}`;
}
  