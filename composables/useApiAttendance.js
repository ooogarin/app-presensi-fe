import { useTokenStore } from '/stores/token';
import dayjs from 'dayjs';
import { useFormatDate } from '/composables/useFormatDate';

export const useApiAttendance = (filterPayload) => {
    const tokenStore = useTokenStore();
    const token = tokenStore.dataUser.token;

    // call API login
    const { data: response, status, pending } = useFetch('http://localhost:3000/web/v1/attendance/get-attendance', {
        lazy: true,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: {
            start: filterPayload.start,
            end: filterPayload.end,
            id_division: filterPayload.id_division,
            id_shifting: filterPayload.id_shifting,
            id_account: filterPayload.id_account,
            id_admin: filterPayload.id_admin,
        },
    });

    let data;
    if (status.value === "success") {
        data = response.value.data.map((item) => {
            const newFormat = {
                nama: item.schedule.account.lname_user,
                tanggal: item.date_attend === '-' ? "-" : useFormatDate(dayjs(item.date_attend, 'YYYY-MM-DD').format('DD-MM-YYYY')),
                shifting: `${item.schedule.shifting.division.division_sname} - ${item.schedule.shifting.shifting_shift_turn.turn_sname} (${item.schedule.shifting.shift_start} - ${item.schedule.shifting.shift_end}) - ${item.schedule.shifting.shifting_shift_type.type_sname}`,
                start: item.attendance_start,
                end: item.attendance_end,
                isPassDay: (item.date_attend_end > item.date_attend_start) ? true : false, // jika tanggal presensi selesai lebih besar dari tanggal presensi mulai
                id_schedule: item.schedule.id_schedule // untuk detail action
            }

            return newFormat;
        });
    } else {
        data = [];
    }

    console.log('api :>> ', 123);

    return { data, pending };
}
  