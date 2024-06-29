<template>
    <div class="flex flex-col space-y-4 px-8 py-4 w-full overflow-y-auto">
        <!-- title page -->
        <div class="p-4 w-full">
            <h1 class="mb-2 font-bold text-3xl">Tambah Data Personel</h1>
            <div class="flex space-x-1">
                <UBreadcrumb :links="linkBreadcrumb">
                    <template #default="{ link, isActive, index }">
                        <span :class="isActive ? 'text-medium text-blue-600' : 'text-normal'">
                            {{ link.label }}
                        </span>
                    </template>
                </UBreadcrumb>
            </div>
        </div>

        <!-- add -->
        <div class="flex flex-col gap-6 bg-white shadow p-6 rounded-xl w-full">
            <!-- header -->
            <div class="flex justify-between items-center">  
                <div class="flex items-center gap-2">
                    <UIcon name="i-heroicons-user-plus" class="w-6 h-6 text-blue-600"/>
                    <span class="font-semibold text-xl">Tambah Data Personel</span>
                </div>
            </div>

            <!-- body -->
            <div class="flex flex-row">
                <div class="w-3/4">
                    <InputFormText v-model="inputName" :dataInfo="dataInputName" class="flex flex-col col-span-8 w-full" />
                    <InputFormText v-model="inputPhone" :dataInfo="dataInputPhone" class="flex flex-col col-span-8 w-full" />
                    <InputFormText v-model="inputEmail" :dataInfo="dataInputEmail" class="flex flex-col col-span-8 w-full" />
                    <InputFormText v-model="inputPassword" :dataInfo="dataInputPassword" class="flex flex-col col-span-8 w-full" />
                </div>
                <div class="border w-1/4">
                    test: {{ inputName }}
                </div>
            </div>

            
            <!-- button submit -->
            <div class="flex justify-end space-x-6 mb-1 px-8">
                <ButtonBase label="Batal" icon="i-heroicons-x-circle" />
                <ButtonBase label="Tambah Data" icon="i-heroicons-plus-circle" mode="solid" />
            </div>
        </div>
    </div>
</template>

<script setup>
    // toggle filter
    const isFilterWrap = ref(true);

    // link breadcrumb
    const linkBreadcrumb = [
        {
            label: 'Data Personel',
            to: '/account',
            icon: 'i-heroicons-users',
            labelClass: 'text-slate-600 text-base font-semibold',
            iconClass: 'text-slate-600'
        },
        {
            label: 'Tambah Data Personel',
            labelClass: 'text-blue-600 text-base font-semibold',
            iconClass: 'text-blue-600'
        },
    ];

    // 1. data input: nama
    const inputName = ref('');
    const dataInputName = {
        info: {
            label: "Nama",
            placeholder: "Masukkan Nama Personel",
            icon: "i-heroicons-user"
        }
    };

    // 2. data input: nama
    const inputPhone = ref('');
    const dataInputPhone = {
        info: {
            label: "Telepon",
            placeholder: "Masukkan Nomor Telepon",
            icon: "i-heroicons-phone"
        }
    };

    // 3. data input: email
    const inputEmail = ref('');
    const dataInputEmail = {
        info: {
            label: "Email",
            placeholder: "Masukkan Email",
            icon: "i-heroicons-envelope"
        }
    };

    // 4. data input: password
    const inputPassword = ref('');
    const dataInputPassword = {
        info: {
            label: "Password",
            placeholder: "Masukkan Password",
            icon: "i-heroicons-eye"
        }
    };
</script>