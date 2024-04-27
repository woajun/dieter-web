import { ReactNode } from "react";
import { Text } from "../../../components/Text";

const H1 = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};
const H2 = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};
const P = ({ children }: { children: ReactNode }) => {
  return <Text>{children}</Text>;
};
const EmptyLine = () => {
  return <div />;
};

export const TermsOfService = () => {
  return (
    <div>
      <H1>제 1장 총 칙</H1>
      <H2>제1조 (목적)</H2>
      <P>
        이 약관은 다이어터(이하 “어플리케이션”)와 이용 고객(이하 “회원”) 간에
        웹사이트 및 및 앱, 어플리케이션을 통해 어플리케이션가 제공하는
        ‘다이어터’ 및 연계된 서비스(이하 “서비스”)의 가입 조건 및 이용에 관한
        제반 사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
      </P>
      <H2>제2조 (이용약관의 효력 및 변경)</H2>
      <P>
        본 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을
        발생합니다. 본 약관은 서비스 내에 온라인으로 공시됨으로써 효력이
        발생되고, 합리적인 사유가 발생할 경우 어플리케이션는 관계법령에 위배되지
        않는 범위에서 본 약관을 변경할 수 있습니다.
      </P>
      <EmptyLine />
      <P>
        개정약관은 서비스 내에 온라인으로 공시됨으로써 효력이 발생됩니다.
        어플리케이션는 약관을 변경할 경우 지체 없이 이를 공시하여야 하고, 회원의
        권리나 의무 등에 관한 중요사항을 개정할 경우에는 사전에 공시하여야
        합니다. 본 약관에 동의하는 것은 정기적으로 서비스 홈페이지를 방문하여
        약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관을
        인지하지 못해 발생하는 이용자의 피해에 대해서 어플리케이션에서는
        책임지지 않습니다. 변경된 약관에 동의하지 않는 회원은 탈퇴(해지)를
        요청할 수 있으며, 약관의 공시된 날로부터 30일 이내 별도의 이의 제기 및
        거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우는 약관에 동의한
        것으로 간주됩니다.
      </P>
      <H2>제3조 (약관과 기타 준칙)</H2>
      <P>
        본 약관은 어플리케이션가 제공하는 개별 서비스에 관한 이용안내와 함께
        적용됩니다. 본 약관에 명시되지 않은 사항은 관계법령 및 서비스별 안내로
        갈음합니다.
      </P>
      <H2>제4조 (용어 정의) </H2>
      <P>
        ① “회원”은 “어플리케이션”에서 제공하는 서비스를 설치 후 회원 가입을
        완료하고 활용하고 있는 자로서, “어플리케이션”이 제공하는 서비스를
        계속적으로 이용할 수 있는 자를 말합니다.
      </P>
      <P>
        ② “회원 계정”이라 함은 “어플리케이션”에서 제공하는 서비스를 이용하기
        위하여 회원이 제공한 정보를 바탕으로 어플리케이션가 발급한 개인 식별
        목적의 인증 번호 조합을 의미합니다.
      </P>
      <P>
        ③ “서비스”라 함은 “어플리케이션”에서 “회원”에게 제공하는 다이어터 서비스
        및 연계된 유/무형의 자산을 의미합니다.
      </P>
      <P>
        ④ “서비스 홈페이지”라 함은 “회원”이 온라인으로 “어플리케이션”에서
        운영하는 서비스 내용을 확인할 수 있는 당사의 인터넷 사이트를 의미합니다.
      </P>
      <P>
        ⑤ “응용프로그램(앱, 어플리케이션)”은 “회원”이 “어플리케이션”에서
        제공하는 서비스를 이용할 수 있는 수단으로, 구글 및 애플에서 운영하는
        스토어에서 무료로 다운로드 받아 서비스를 이용할 수 있습니다.
      </P>
      <P>
        ⑥ “기능”은 “응용프로그램” 내 “서비스”를 구성하는 요소로서, 크게 “기록”,
        “통계”, “메이트”, “캘린더”, “마이페이지” 등의 요소를 통합하여 이르는
        명칭입니다.
      </P>
      <H1>제2장 이용계약 체결</H1>
      <H2>제5조 (이용 계약의 성립)</H2>
      <P>
        이용계약은 회원이 본 약관에 대한 동의와 회원가입 절차를 완료함으로써
        성립하며, 본 이용약관에 대한 동의 절차는 어플리케이션는 서비스 이용 신청
        화면에 게시하고, 회원은 본 약관과 동의 절차에 대하여 인지하고 신청을
        완료함으로써 성립합니다. 해당 계약은 본 이용약관이 어플리케이션에 의해
        변경/해지되거나 회원이 이용계약을 철회, 사용 제한 등 서비스를 정상적으로
        이용할 수 없기 전까지 어플리케이션와 회원 간 유효하게 존속하는 것으로
        합니다.
      </P>
      <H2>제6조 (서비스 이용 신청)</H2>
      <P>
        회원으로 가입하여 본 서비스를 이용하고자 하는 자는 어플리케이션에서
        요청하는 제반 정보(카카오, 애플 등의 계정 및 개인 식별 정보)를 제출해야
        합니다. 모든 회원은 반드시 실제로 본인이 소유하고 있는 정보를
        제공하여야만 서비스를 이용할 수 있으며, 제대로 기입하지 않은 자는 일체의
        권리를 주장할 수 없습니다. 만일 제3의 명의 도용 및 부정한 방법으로
        이용하는 경우에는 관련 법령에 의해 처벌 받을 수 있습니다. 어플리케이션는
        본 서비스를 이용하는 회원을 등급별로 구분하고, 활용할 수 있는 기능 등을
        세분하여 이용에 차등을 줄 수 있습니다.
      </P>
      <H2>제7조 (서비스의 제공 및 변경)</H2>
      <P>어플리케이션는 회원에게 아래와 같은 서비스를 제공합니다. </P>
      <EmptyLine />
      <P>
        ① 회원이 직/간접적으로 식단, 체중, 운동 내용 등의 건강 관리 내용을 기록,
        관리할 수 있는 서비스
      </P>
      <P>
        ② 회원이 등록한 대상과의 기록 공유 등 건강과 체중 관리를 위한 유저간
        소셜 네트워킹 서비스
      </P>
      <EmptyLine />
      <P>
        어플리케이션는 서비스 변경 시 변경될 서비스의 내용 및 제공일자를
        홈페이지를 통해 공지하고 서비스를 변경하여 회원에게 제공할 수 있습니다.
      </P>
      <H2>제8조 (개인정보의 보호 및 사용)</H2>
      <P>
        어플리케이션는 고객의 개인정보를 보호하고 존중할 의무가 있습니다.
        어플리케이션는 별도의 이벤트 및 마케팅 활동과, 기타 “어플리케이션”에서
        제공하는 서비스를 이용하기 위한 과정에서 수집되는 개인 정보를 활용하여
        서비스 안내 및 경품 제공 동의 마케팅 활용을 할 수 있으며, 이용약관에
        명시된 서비스 제공을 위한 목적으로만 사용합니다. 어플리케이션는 서비스
        제공과 관련하여 취득한 고객의 신상정보를 본인의 승낙 없이 제3자에게
        누설할 수 없으며, 기타 자세한 사항은 정보통신 보호법에 따릅니다.
      </P>
      <EmptyLine />
      <P>다만, 다음의 각 호의 경우에는 예외로 제공할 수 있습니다. </P>
      <EmptyLine />
      <P>
        ① 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서, 특정 개인을
        식별할 수 없는 형태로 가공하여 제공하는 경우
      </P>
      <P>
        ② 관계 법령에 의하여 수사상 목적으로 정해진 절차와 방법에 따라
        관계기관의 요구가 있는 경우
      </P>
      <P>③ 다른 법률에 특별한 규정이 있는 경우 </P>
      <P>④ 정보통신윤리위원회가 관계법령에 의하여 요청 경우 </P>
      <P>⑤ 회원에게 보다 전문적이고 다양한 서비스를 제공하기 위한 경우 </P>
      <EmptyLine />
      <P>
        어플리케이션는 회원에게 제 5항의 전문적이고 다양한 서비스를 제공하기
        위해 개인정보를 활용할 경우, 회원의 동의를 받아 외부전문사업자와
        공동으로 서비스를 제공하며 이때 해당전문사업자의 상호와 공유목적, 공유
        정보를 명시합니다. 외부전문사업자와의 공동서비스를 제공함에 있어 회원의
        성명, 연락처 등 공동서비스에 필요한 최소한의 정보가 공유될 수 있고,
        공유되는 정보는 아래 각호와 같이 엄격히 보호 관리됩니다.
      </P>
      <EmptyLine />
      <P>
        ① 공유되는 정보는 해당 전문서비스 이외 어떠한 다른 용도로도 사용되지
        않습니다.
      </P>
      <P>
        ② 서비스 제공 과정에서 해당 전문서비스에 대해 회원이 동의의사를 밝히지
        않거나 사전에 거부의사를 밝힐 경우 최소한의 정보도 전문 사업자와
        공유하지 않습니다.
      </P>
      <H2>제9조 (이용 신청의 승낙과 제한)</H2>
      <P>
        어플리케이션는 제6조의 규정에 의한 이용신청고객에 대하여 업무 수행상
        또는 기술상 지장이 없는 경우 원칙적으로 서비스 이용을 승낙합니다.
        어플리케이션는 아래사항에 해당할 경우 이용을 승낙하지 않을 수 있습니다.
      </P>
      <EmptyLine />
      <P>① 실명이 아니거나 타인의 명의를 이용하여 신청한 경우 </P>
      <P>② 부정한 용도로 본 서비스를 이용하고자 하는 경우 </P>
      <P>③ 영리를 추구할 목적으로 본 서비스를 이용하고자 하는 경우 </P>
      <P>④ 어플리케이션의 서비스 제공에 피해를 끼칠 수 있다고 판단되는 경우</P>
      <P>
        ⑤ 기타 규정한 제반 사항을 위반하며 신청하는 경우 이용신청고객이 13세
        이하일 경우, 관련 법령에 따라 서비스가 설치되어 있는 기기의 설정에서
        위치정보서비스를 끈 상태에서만 사용할 수 있습니다.
      </P>
      <P>
        이용신청고객이 직접 위치정보서비스의 설정을 끌 수 없는 경우에는
        어플리케이션는 부모님 혹은 법적보호자에게 도움을 받도록 안내를
        유도합니다.
      </P>
      <EmptyLine />
      <H2>제10조 (회원 계정 부여 및 변경 등)</H2>
      <P>
        어플리케이션는 약관에 정하는 바에 따라 이용고객에게 회원 계정을
        부여합니다. 회원 계정는 원칙적으로 변경이 불가하며 부득이한 사유로
        인하여 변경하고자 할 경우에는 해당 계정을 해지하고 재가입해야 합니다.
        회원 계정은 다음 각 호에 해당할 경우 이용고객 또는 어플리케이션의
        요청으로 변경할 수 있습니다.
      </P>
      <EmptyLine />
      <P>① 타인의 정보를 도용한 경우 </P>
      <P>② 개인정보 유출의 위험이 있는 경우 </P>
      <P>③ 기타 합리적인 사유가 있는 경우 </P>
      <EmptyLine />
      <H2>
        제3항의 경우, 어플리케이션는 회원에게 이용자 본인임을 증명하기 위한
        별도의 추가 자료를 요청할 수 있습니다. 이에 대해 회원은 성실하고
        진실되게 응해야 할 의무가 있으며, 증명이 되지 않을 경우 변경은
        불가합니다. 회원 계정의 관리책임은 회원에게 있고, 그 관리책임을 소홀히
        하여 발생하는 서비스 이용상의 손해나 제3자에 의한 부정이용 등의 책임은
        전적으로 회원이 부담하여야 합니다. 회원은 자신의 계정을 도난 당하거나 제
        3자가 사용하고 있음을 인지한 경우에는 바로 어플리케이션에 통보하고
        어플리케이션의 안내가 있는 경우에는 그에 따라야 합니다.
      </H2>
      <H1>제3장 계약 당사자의 의무</H1>
      <H2>제11조 (어플리케이션의 의무)</H2>
      <P>
        어플리케이션는 특별한 사정이 없는 한 회원에게 계속적이고 안정적으로
        서비스를 제공해야 합니다. 어플리케이션는 개인정보 보호를 위한
        보안시스템을 구축하고 개인정보취급방침을 공시하고 준수합니다.
        어플리케이션는 회원으로부터 제기되는 의견이나 불만이 정당하다고 인정될
        경우 적절한 조치를 취해야 합니다. 어플리케이션는 긴급한 시스템 점검,
        국가비상사태, 설비의 장애, 서비스 이용자의 폭주 등으로 인하여 정상적인
        서비스를 제공하기 곤란할 경우 사유 및 기간 등을 회원에게 사전 또는
        사후에 공지합니다.
      </P>
      <H2>제12조 (이용자의 의무)</H2>
      <P>
        이용자는 회원가입신청이나 회원정보변경 시 모든 사항을 사실에 근거해
        작성하여야 하며, 허위 또는 타인의 정보를 이용하여 등록할 경우에는
        '회원'으로서의 일체의 권리를 주장할 수 없습니다. 회원은 이용계약사항의
        변경이 있을 경우 필요한 절차를 거쳐 즉시 이를 어플리케이션에 알려야
        합니다. 회원은 본 약관과 관계법령 등 제반 규정 및 어플리케이션의
        공지사항을 준수하여야 하며, 어플리케이션의 업무를 방해하거나
        어플리케이션의 명예를 손상시키는 행위를 해서는 안됩니다. 회원은
        어플리케이션의 사전 승낙 없이 서비스를 이용하여 영업활동을 할 수 없으며,
        어플리케이션는 그 영업활동에 대한 책임을 부담하지 않습니다. 또한 회원은
        위와 같은 영업활동으로 어플리케이션에 손해를 입힐 경우 손해배상책임을
        부담합니다.
      </P>
      <EmptyLine />
      <P>
        회원은 어플리케이션 및 제 3자의 지적재산권을 침해해서는 안됩니다.
        어플리케이션는 회원이 다음 각 호의 행위를 할 경우 회원의 서비스 이용제한
        등 적절한 제한조치를 할 수 있습니다.
      </P>
      <EmptyLine />
      <P>① 회원가입 신청 또는 회원정보 변경 시 허위내용을 등록하는 행위 </P>
      <P>② 다른 이용자의 계정 등 개인정보를 도용하는 행위 </P>
      <P>③ 이용자 계정을 타인과 거래하는 행위 </P>
      <P>④ 어플리케이션의 운영진, 직원 또는 관계자를 사칭하는 행위 </P>
      <P>
        ⑤ 어플리케이션로부터 특별한 권리를 부여 받지 않고 어플리케이션의
        응용프로그램을 변경하거나, 어플리케이션의 서버를 해킹하거나, 웹사이트
        또는 게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위
      </P>
      <P>
        ⑥ 어플리케이션에서 제공하는 서비스에 위해를 가하거나 고의로 방해하는
        행위
      </P>
      <P>
        ⑦ 본 서비스를 통해 얻은 정보를 어플리케이션의 사전 승낙 없이 서비스 이용
        외의 목적으로 복제하거나, 이를 출판 및 방송 등에 사용하거나, 제 3자에게
        제공하는 행위
      </P>
      <P>
        ⑧ 공공질서 및 미풍양속에 위반되는 저속, 음란한 내용의 정보, 문장, 도형,
        음향, 동영상을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게
        유포하는 행위
      </P>
      <P>
        ⑨ 모욕적이거나 개인신상에 대한 내용이어서 타인의 명예나 프라이버시를
        침해할 수 있는 내용을 전송, 게시, 전자우편 또는 기타의 방법으로 타인에게
        유포하는 행위
      </P>
      <P>
        ⑩ 다른 이용자를 희롱 또는 위협하거나, 다수의 이용자에게 분란을
        조장하거나, 특정 이용자에게 지속적으로 고통 또는 불편을 주는 행위
      </P>
      <P>
        ⑪ 어플리케이션의 승인을 받지 않고 다른 사용자의 개인정보를 수집 또는
        저장하는 행위
      </P>
      <P>⑫ 범죄와 결부된다고 객관적으로 판단되는 행위 </P>
      <P>
        ⑬ 본 약관을 포함하여 기타 어플리케이션가 정한 제반 규정 또는 이용 조건을
        위반하는 행위
      </P>
      <P>⑭ 기타 관계법령에 위배되는 행위</P>
      <EmptyLine />
      <P>
        어플리케이션가 회원 자격을 제한, 정지시킨 후 동일한 행위가 2회 이상
        반복되거나 30일 이내에 그 사유가 시정되지 않는 경우 어플리케이션는 회원
        자격을 상실시킬 수 있습니다. 어플리케이션가 회원 자격을 상실시키는
        경우에는 회원 등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원
        등록 말소 전에 30일의 기간을 정하여 소명할 기회를 부여합니다.
      </P>
      <H2>제13조 (다운로드 등에 대한 주의사항)</H2>
      <P>
        어플리케이션는 구글 및 애플에서 제공하는 스토어를 통해 응용프로그램을
        다운로드 받기를 권장하고 있습니다. 이외 경로를 통해 다운로드 후, 오류가
        생길 경우 어플리케이션는 회원에게 발생한 손해 등에 대하여 일절 책임을
        지지 않습니다. 회원은 서비스 이용을 시작함과 동시에 회원이 보유한 정보의
        유실, 혹은 변형, 기기의 고장, 손상 등이 발생하지 않도록 충분한 주의를
        기울여야 합니다.
      </P>
      <H2>제14조 (정보의 제공)</H2>
      <P>
        어플리케이션는 서비스를 운영함에 있어 각종 정보를 서비스 화면에
        게재하거나 필요에 의한 여러 방법으로 회원에게 정보를 제공할 수 있습니다.
        어플리케이션는 서비스 개선 등의 목적으로 회원의 동의 하에 추가적인 개인
        정보를 요구할 수 있습니다. 이용 절차를 완료한 회원은 서비스 이용에 있어
        직접 기록하는 여러 게시글 정보가 당사에 알려지는 것을 동의하는 것으로
        보며, 어플리케이션는 서비스 개선 목적을 위해 회원이 게재한 정보를
        내부적으로 수집하여 이용할 수 있습니다. 단, 이 경우 회원의 개인 식별이
        되지 않는 정보로만 활용합니다.
      </P>
      <H2>제15조 (광고게재 및 광고주와의 거래)</H2>
      <P>
        어플리케이션가 회원에게 제공하는 서비스 투자 기반의 일부는 광고 게재를
        통한 수익으로부터 나옵니다. 어플리케이션는 서비스 운영과 관련하여
        홈페이지, 서비스 화면, 응용 프로그램 등에 광고를 게재할 수 있고, 회원은
        서비스 이용 시 노출되는 광고게재에 동의합니다. 회원이 서비스상에
        게재되어 있는 광고를 이용하거나 서비스를 통한 광고주의 판촉활동에
        참여하는 등의 방법으로 교신 또는 거래를 하는 것은 전적으로 회원과 광고주
        간의 문제이므로 이로 인해 발생하는 손실과 손해에 대해 어플리케이션는
        어떠한 책임도 지지 않습니다.
      </P>
      <H1>제4장 이용 철회 및 기타</H1>
      <H2>제16조 (계약 변경 및 해지)</H2>
      <P>
        회원이 이용 계약을 해지하고 하는 때에는 회원 본인이 서비스 내 회원 탈퇴
        절차를 통해 진행해야 합니다. 또한 결제 취소 및 상품 환불의 경우에도 회원
        본인이 구글 및 애플 스토어를 통해 진행해야 합니다. 환불 정책은
        원칙적으로 당사의 응용프로그램 설치를 제공하는 구글 및 애플 앱스토어의
        정책에 따릅니다.
      </P>
      <H2>제17조 (손해배상)</H2>
      <P>
        어플리케이션가 제공하는 서비스로 인하여 회원에게 손해가 발생하는 경우,
        어플리케이션는 그 손해가 어플리케이션의 고의 또는 중과실에 의한 경우에
        한하여 통상손해의 범위에서 손해배상책임을 부담합니다.
      </P>
      <H2>제18조 (면책조항 및 비보장 범위)</H2>
      <P>
        어플리케이션는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여
        서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.
        어플리케이션는 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로
        제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다. 어플리케이션는
        서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한
        손해에 대한 책임이 면제됩니다. 어플리케이션는 회원의 귀책사유로 인한
        서비스 이용의 장애 또는 손해에 대하여 책임을 지지 않습니다.
        어플리케이션는 이용자의 컴퓨터 오류에 의해 손해가 발생한 경우, 또는
        회원이 신상정보 및 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우
        책임을 지지 않습니다. 어플리케이션는 회원이 서비스를 이용하여 기대하는
        바를 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
        어플리케이션는 회원이 서비스를 이용하면서 얻은 자료로 인한 손해에 대하여
        책임을 지지 않습니다. 또한 어플리케이션는 회원이 서비스를 이용하며 타
        회원으로 인해 입게 되는 정신적 피해에 대하여 보상할 책임을 지지
        않습니다. 어플리케이션는 회원이 서비스에 게재한 각종 정보, 자료, 사실의
        신뢰도, 정확성 등 내용에 대하여 책임을 지지 않습니다. 어플리케이션는
        이용자 상호간 및 이용자와 제 3자 상호 간에 서비스를 매개로 발생한 분쟁에
        대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임도 없습니다.
      </P>
      <P>
        어플리케이션는 당사의 고의적이거나 중대한 과실이 있는 경우를 제외하고,
        발생할 수 있는 회원의 모든 피해(데이터 유실 등을 포함한 모든 피해)에
        대하여 어플리케이션는 일절 책임을 지지 않습니다.
      </P>
      <H2>제19조 (재판권 및 준거법) </H2>
      <P>
        이 약관에 명시되지 않은 사항은 전기통신사업법 등 관계법령과 상관습에
        따릅니다. 서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우
        어플리케이션의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.
      </P>
      <H2>제20조 (분쟁해결)</H2>
      <P>
        어플리케이션는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
        피해를 보상처리하기 위하여 피해보상처리기구를 설치ㆍ운영합니다.
        어플리케이션는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그
        사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그
        사유와 대략적인 처리일정을 통보해드립니다. 어플리케이션와 이용자 사이에
        발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는
        공정거래위원회 또는 시 · 도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수
        있습니다.
      </P>
      <EmptyLine />
      <P>본 약관은 2024년 4월 26일부터 적용됩니다.</P>
    </div>
  );
};