<template>
    <div class="write-table">
        <table>
            <colgroup>
                <col style="width: 20%;">
                <col style="width: auto;">
            </colgroup>
            <tbody>
                <tr>
                    <th>이름</th>
                    <td>
                        <input type="text">
                    </td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td>
                        <input type="tel">
                    </td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>
                        <input type="email">
                    </td>
                </tr>
                <tr>
                    <th>성별</th>
                    <td>
                        <radio :options="{ name: 'gender' }">남자</radio>
                        <radio :options="{ name: 'gender' }">여자</radio>
                    </td>
                </tr>
                <tr>
                    <th>체크박스</th>
                    <td>
                        <checkbox>체크박스 1</checkbox>
                        <checkbox>체크박스 2</checkbox>
                    </td>
                </tr>
                <tr>
                    <th>달력</th>
                    <td>
                        <datepicker :options="{
                            format: 'yyyy-MM-dd',
                            value: new Date()
                        }"></datepicker>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
.write-table {width: 100%;}
.write-table table {width: 100%; border-top: 1px solid #000000;}
.write-table table tbody tr th {border-bottom: 1px solid #cccccc;}
.write-table table tbody tr td {border-bottom: 1px solid #cccccc; padding: 10px 20px;}
.write-table table tbody tr td label {margin: 0 20px 0 0; line-height: 40px;}
</style>
