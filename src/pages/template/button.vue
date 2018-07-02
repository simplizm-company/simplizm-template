<template>
    <div>
        <button-box>
            <button-01 :options="{
                size: 90,
                type: 'color-01',
                width: '200px'
            }">color 01</button-01>
            <button-01 :options="{
                size: 90,
                type: 'color-02',
                width: '200px'
            }">color 02</button-01>
            <button-01 :options="{
                size: 90,
                type: 'color-03',
                width: '200px'
            }">color 03</button-01>
        </button-box>
        <button-box style="margin-top: 50px;">
            <button-01 :options="{
                size: 70,
                type: 'color-01',
                width: '150px'
            }">color 01</button-01>
            <button-01 :options="{
                size: 70,
                type: 'color-02',
                width: '150px'
            }">color 02</button-01>
            <button-01 :options="{
                size: 70,
                type: 'color-03',
                width: '150px'
            }">color 03</button-01>
        </button-box>
    </div>
</template>