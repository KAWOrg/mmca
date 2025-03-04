<template>
  <div class="hello">
    <h1>국립현대미술관 {{ musumInfo.musumNm }}</h1>

    <h3>관람 정보</h3>
    <!-- 서울 -->
    <div v-show="musumInfo.musumCd == '001'">
      <table>
        <thead>
          <tr>
            <th>할인대상</th>
            <th>관람료 책정 기준</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>관람권(기획전)</strong></td>
            <td>
              - 개별관람권: 전시별 별도<br>
              - 통합관람권: 7,000원 ※ 기획전시 3개 이상 운영 시<br>
              - 수, 토 야간개장 시 무료관람입니다(오후 6시~9시)<br>
              - 무료관람일은 매월 마지막 수요일 문화가 있는 날입니다.
            </td>
            <td></td>
          </tr>
          <tr>
            <td><strong>할인대상</strong></td>
            <td><strong>제휴사</strong><br>- 다둥이카드 소지자 20%</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>무료대상</strong></td>
            <td>
              <strong>일반</strong><br>
              - 만 24세 이하, 만 65세 이상<br>
              - 대학생(학부생)<br>
              - 국가유공자·독립유공자(유공자증 소지시 본인 및 가족)<br>
              - 5.18민주유공자, 특수임무수행자, 국가보훈보상대상자(증빙 소지시 본인 및 배우자, 선순위자)<br>
              - 고엽제후유증환자, 참전유공자(국가보훈등록증 소지자)<br>
              - 의상자증 소지자 및 동행 활동보조자<br>
              - 의사자 유족증 소지자<br>
              - 장애인 및 동행보호자<br>
              - 문화누리카드 소지자<br>
              - 미술관에 미술작품 등의 자료 기증자(기증자 카드 소지시 본인 및 동반가족)<br>
              - 박물관·미술관 학예사 자격 취득자(자격증 소지)<br>
              - 예술인패스 소지자<br>
              - ICOM(국제박물관협의회)카드 소지자<br>
              - CIMAM(국제근현대미술관위원회)카드 소지자<br>
              - 패트론/파트너 카드 소지자<br>
              - 학부모 On누리 사이트 내 학교폭력 대응 관련 과정 이수증 소지자
            </td>
            <td>
              ※ 신분증 또는 증명서류 제시자에 한함.<br>
              ※ 문의: 02-3701-9500
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    <!-- 과천 -->
    <div v-show="musumInfo.musumCd == '002'">
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>관람료 책정 기준</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>기획전시, 공공기획전시</strong></td>
            <td>
              관람료는 전시에 따라 다릅니다. 자세한 관람료는 개별 전시 페이지를 확인하시기 바랍니다.<br>
              무료관람일은 매월 마지막 수요일 문화가 있는 날입니다.
            </td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2"><strong>할인대상</strong></td>
            <td><strong>제휴사</strong></td>
            <td>- 다둥이카드 소지자 20%</td>
          </tr>
          <tr>
            <td><strong>무료대상</strong></td>
            <td>
              <strong>일반</strong><br>
              - 만 24세 이하, 만 65세 이상<br>
              - 대학생(박사생)<br>
              - 국가유공자·독립유공자 (유공자증 소지시 본인 및 가족)<br>
              - 5.18민주유공자, 특수임무수행자, 국가보훈보상대상자 (증빙 소지시 본인 및 배우자, 선순위자)<br>
              - 고엽제후유증환자, 참전유공자 (국가보훈등록증 소지자)<br>
              - 의상자증 소지자 및 동반 활동보조자<br>
              - 의사자 유족증 소지자<br>
              - 장애인 및 동반보호자<br>
              - 문화누리카드 소지자<br>
              - 미술관에 미술작품 등의 자료 기증자 (기증자 카드 소지시 본인 및 동반가족)<br>
              - 박물관·미술관 학예사 자격 취득자 (자격증 소지)<br>
              - 예술인패스 소지자<br>
              - ICOM(국제박물관협의회)카드 소지자<br>
              - CIMAM(국제현대미술관위원회)카드 소지자<br>
              - 패트론/파트너 카드 소지자<br>
              - 학부모 On누리 사이트 내 학교폭력 대응 관련 과정 이수증 소지자
            </td>
          </tr>
          <tr>
            <td colspan="3">
              ※ 문의: 02-2188-6000<br>
              ※ 신분증 또는 증명서류 제시자에 한함.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 덕수궁 -->
    <div v-show="musumInfo.musumCd == '003'">
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>관람료 책정 기준</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>전시</strong></td>
            <td>
              관람료는 전시에 따라 다릅니다. 자세한 관람료는 개별 전시 페이지를 확인하시기 바랍니다.<br>
              수, 토 야간개장 시 무료 관람입니다. (오후6시~9시)<br>
              미술관은 수요일, 토요일 9시까지 야간개장이나 덕수궁 정문(대한문)은 8시에 입장 마감이니 참고하시기 바랍니다.<br>
              무료관람일은 매월 마지막 수요일 문화가 있는 날입니다.
            </td>
            <td>※ 덕수궁 관람료 별도</td>
          </tr>
          <tr>
            <td rowspan="2"><strong>할인대상</strong></td>
            <td><strong>제휴사</strong></td>
            <td>- 다둥이카드 소지자 20%</td>
          </tr>
          <tr>
            <td><strong>무료대상</strong></td>
            <td>
              <strong>일반</strong><br>
              - 만 24세 이하, 만 65세 이상<br>
              - 대학생(학부생)<br>
              - 국가유공자·독립유공자 (유공자증 소지시 본인 및 가족)<br>
              - 5.18민주유공자, 특수임무수행자, 국가보훈보상대상자 (증빙 소지시 본인 및 배우자, 선순위자)<br>
              - 고엽제후유증환자, 참전유공자 (국가보훈등록증 소지자)<br>
              - 의상자증 소지자 및 동반 활동보조자<br>
              - 의사자 유족증 소지자<br>
              - 장애인 및 동반보호자<br>
              - 문화누리카드 소지자<br>
              - 미술관에 미술작품 등의 자료 기증자 (기증자 카드 소지시 본인 및 동반가족)<br>
              - 박물관·미술관 학예사 자격 취득자 (자격증 소지)<br>
              - 예술인패스 소지자<br>
              - ICOM(국제박물관협의회)카드 소지자<br>
              - CIMAM(국제현대미술관위원회)카드 소지자<br>
              - 패트론/파트너 카드 소지자<br>
              - 학부모 On누리 사이트 내 학교폭력 대응 관련 과정 이수증 소지자
            </td>
          </tr>
          <tr>
            <td colspan="3">
              ※ 문의: 02-2022-0600<br>
              ※ 신분증 또는 증명서류 제시자에 한함.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 청주 -->
    <div v-show="musumInfo.musumCd == '004'">
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>관람료 책정 기준</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>관람료(5층 기획전시실)</strong></td>
            <td>2,000원 ※구입 시 1~4층 관람 가능</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>1~4층 수장고</strong></td>
            <td>무료</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>할인대상</strong></td>
            <td>20인 이상 단체 예매 시 인당 1,600원</td>
            <td></td>
          </tr>
          <tr>
            <td><strong>무료대상</strong></td>
            <td>
              「독립유공자예우에 관한 법률」적용 독립유공자, 그 가족<br>
              「장애인복지법」적용 등록장애인 및 동행 보호자<br>
              24세 이하<br>
              65세 이상<br>
              「국민기초생활보장법」적용 수급권자 및 차상위계층<br>
              「박물관 및 미술관 진흥법」적용 박물관 또는 미술관 학예사
            </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="3">※ 10:00부터 입장<br>※ 17:00 입장 마감</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PrevInfo',
  props: {
    musumInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style scoped>
table {
  width: 50%;
  border-collapse: collapse;
  font-size: 0.7rem;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>