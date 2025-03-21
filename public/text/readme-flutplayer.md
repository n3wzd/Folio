# FlutPlayer

---

2023-09 ~ 2024-01 (1인)

## 배경
FlutPlayer는 Android, Windows 크로스플랫폼 오디오 플레이어 애플리케이션입니다. 태그 관리, 이퀄라이저, 비주얼라이저, 매시업 모드, 커스텀 백그라운드 등 다양한 기능으로 사용자가 원하는대로 커스터마이즈할 수 있습니다.

## 기능
- 오디오
    - 재생 슬라이더
    - 재생 및 일시정지
    - 다음 트랙 이동, 이전 트랙 이동
    - 셔플 재생 및 반복 재생 모드 지원
    - 매시업 모드
    - 볼륨 조절
- 재생 목록
    - 목록 정렬, 목록 초기화
    - 음원 이동 (드래그 앤 드랍)
    - 음원 제거 (스와이프)
- 태그
    - 선택한 태그를 재생 목록으로 불러오기
    - 태그 추가, 업데이트, 삭제
    - 태그 즐겨찾기 기능
    - 데이터베이스 저장
- 이퀄라이저
    - 밴드의 게인 값 조절
    - 스무스 슬라이더 이동
- 배경
    - 로컬 파일 내 배경 파일 선택 가능
    - 이미지 배경 회전, 확대/축소, 색상 필터링 여부 설정
    - 배경 밝기 조절
    - 기본 애니메이션 백그라운드
- NCS(NoCopyrightSounds) 비주얼라이저
    - 15가지 색상 설정
- 설정
    - 태그 설정, 정렬 방식 선택, 매시업, 이퀄라이저 조정, 배경 및 비주얼라이저 설정
    - 데이터베이스, CSV 파일 내보내기 / 불러오기
- 기타
    - 백그라운드 프로세스 지원
    - 알림바 UI 제공

## 스택
- **Flutter**
- **Dart**

## 문제 및 해결
### 매시업 구현
한 음원을 끝까지 재생하면 시간이 길게 느껴질 수 있습니다. 그래서 적당한 시간이 지나면 다음 음원으로 전환하고자 했습니다. 그러나 현재 재생 중인 음원을 끊고 다른 음원을 재생하면 소리가 갑작스럽게 달라져 부자연스럽다는 문제가 발생했습니다.

2개의 오디오 플레이어를 사용해 2개의 음원이 천천히 겹쳐서 재생되는 매시업 효과를 구현합니다. 매시업 효과는 다음과 같은 방식으로 구현했습니다.

1. 첫 번째 플레이어에서 새로운 음원이 재생되면 타이머를 시작합니다.
2. 타이머가 끝나거나 재생 중인 음원이 종료되면 두 번째 플레이어에서 무작위 위치에서 음원을 재생합니다. 두 번째 플레이어의 초기 볼륨은 0입니다.
3. 첫 번째 플레이어의 볼륨을 서서히 줄이고, 두 번째 플레이어의 볼륨을 서서히 올립니다.
4. 이 과정을 반복하여 매시업 효과를 구현합니다.

매시업 효과는 메뉴 상단에 있는 버튼으로 사용자가 on/off할 수 있습니다.

일반적인 음원 길이가 3분이면 다음 음원이 재생되기까지 3분을 기다려야 합니다. 매시업 효과를 활성하면 기존보다 시간당 음원 전환 속도가 약 500% 증가합니다. (전환 타이머 30초 기준) 부드러운 트랜지션이 적용되므로 자연스러운 전환을 경험할 수 있습니다.

### 비주얼라이저 추가
플레이어 화면에 배경만 있다면 다소 심심하다는 느낌을 받을 수 있습니다. 그래서 재생 중인 음원에 반응하는 원형 비주얼라이저 효과를 넣고자 합니다.

플레이어 화면 중앙에 비주얼라이저 위젯을 추가합니다. 비주얼라이저는 다음 과정으로 동작합니다.

1. 음원 파일 로드 시, 해당 음원 파일의 byte 리스트를 추출합니다.
2. 현재 음원이 재생 중인 상대 위치를 기반으로 샘플 데이터 범위를 추출합니다.
3. 추출한 데이터 목록으로 RMS 값을 계산하여 단일 값으로 변환합니다.
4. 이 값을 바탕으로 원형 비주얼라이저의 크기를 결정합니다.
5. 위 과정을 일정 시간마다 반복하여 애니메이션을 재생합니다.

비주얼라이저를 추가한 결과, 사용자가 음원 재생 중 시각적으로 더 몰입할 수 있게 되었습니다. 비주얼라이저가 활성화된 상태에서 재생된 음원의 사용자 경험이 한층 향상되었습니다.

### Scoped Storage로 인한 스토리지 스캔 오류
안드로이드 11(API 레벨 30)부터 적용된 Scoped Storage로 인해 이전의 파일 접근 방식이 차단됩니다. 이 문제를 해결하기 위해 아래 과정을 적용하였습니다.

1.  `AndroidManifest.xml`에 `android.permission.MANAGE_EXTERNAL_STORAGE` 권한을 추가합니다.
2.  `permission_handler` 패키지를 사용해 사용자로부터 모든 파일 접근 권한을 요청합니다. 이 과정은 앱 최초 구동 시, 한번만 실행됩니다.
3. `dart:io`를 사용해 파일에 접근합니다. 외부 저장소 경로는 `external_path` 패키지를 사용해 찾을 수 있습니다.

안드로이드 11 이상에서도 사용자가 파일을 불러올 수 있으며, 파일 접근성이 향상되었습니다.

### 안드로이드 백그라운드 강제 종료 현상
앱이 안드로이드 백그라운드에서 실행될 때 약 15분 후에 강제로 종료되는 현상이 발생합니다. 아래 과정을 통해 해결하였습니다.

1. 백그라운드에서 실행될 수 있도록 `audio_service` 패키지를 사용합니다.
2.  `components/audio_handler` 파일을 추가하고 `AudioPlayer.playbackEventStream.listen`에 `playbackState.add`를 실행하여 백그라운드에서도 동작하도록 설정합니다.

더 이상 백그라운드에서도 앱이 종료되지 않습니다. 이전에는 최대 15분까지 앱이 실행되었다면, 현재는 3시간이 지나도 앱이 유지됩니다.

### database is locked 오류 발생
앱 실행시 `sqflite` 데이터베이스 초기화 시 "database is locked (code 5 sqlite_busy)" 오류가 발생하여 사용할 수 없다는 문제가 발견되었습니다.

`sqflite`는 동시 읽기/쓰기 작업을 지원하지 않으므로 첫 파일 생성 및 초기화 시에는 다른 작업을 제한해야 합니다. 데이터베이스 상태를 체크하는 프로퍼티를 추가하여 초기화 중에는 CRUD 연산을 제한합니다.

이러한 조치를 통해 "database is locked" 오류가 더 이상 발생하지 않으며, 초기화 중 CRUD 연산이 제한됨에 따라 데이터 손실이나 충돌이 예방되었습니다. 오류 발생률이 0%로 감소하여 앱의 안정성이 향상되었습니다.

### 셔플 기능 구현
항상 정해진 플레이 리스트에 따라 음원을 재생한다면 단조롭다는 느낌을 받을 수 있습니다. 플레이 리스트의 음원 순서를 무작위로 변경하는 셔플 기능을 구현해야 합니다.

셔플 동작 과정은 다음과 같습니다.

1. **셔플 사용**: 현재 플레이 리스트의 상태를 백업하고 배열의 `shuffle()` 메서드를 사용해 리스트를 무작위로 섞습니다. 셔플 이후에는 현재 재생 중인 트랙이 첫 번째로 유지되도록 설정합니다.
2. **셔플 해제**: 백업해둔 원래 리스트를 복원하여 셔플 이전 상태로 되돌립니다.

셔플 기능을 추가한 결과, 사용자가 더 다양하고 흥미로운 청취 경험을 할 수 있게 되었습니다. 같은 플레이 리스트를 반복하는 대신 음원의 무작위 재생을 통해 새로운 음악 경험을 즐길 수 있습니다.

### 프로퍼티-위젯 바인딩
플레이 리스트에서 사용자가 다른 음원을 선택하면 UI에 있는 음원의 제목을 업데이트해야 합니다. 이처럼 어떠한 프로퍼티(A)가 변경되었을 때 관련된 위젯(B)을 자동으로 업데이트해야 할 필요가 있습니다.

이 문제를 해결하기 위해 다음과 같은 구조로 앱을 설계합니다.

1. 프로퍼티 A가 변경되면 A와 연관된 `StreamController`를 통해 신호를 보냅니다.
2. 해당 신호를 받은 B를 포함한 `StreamBuilder`가 자동으로 빌드됩니다.
3.  `StreamBuilder`가 다시 렌더링되면서 변경된 프로퍼티 값을 반영하게 됩니다.

일관된 프로퍼티-위젯 바인딩 구조 덕분에 이전보다 안정적인 코드 작성이 가능해졌습니다. 이로 인해 버그가 감소하고 코드 가독성이 향상되었습니다.

### 통합 오디오 플레이어 인터페이스
음원 플레이어 위젯 코드에서 `just_audio`와 `audioplayers` 패키지를 동시에 사용하면 API의 일관성을 유지하기 어렵습니다. 또한 패키지의 사용법이 변경되면 코드의 여러 부분을 수정해야 한다는 문제가 있습니다.

`AudioPlayer`라는 인터페이스 클래스를 새로 생성하여 추상화된 API를 제공합니다. `AudioPlayer` 클래스는 `just_audio` 또는 `audioplayers`와 직접 연결되어 있으며, 음원 플레이어 코드에서는 오직 `AudioPlayer`의 API만 사용하여 패키지 코드를 직접적으로 호출하지 않습니다.

따라서, 만약 패키지의 사용 방법이 수정된다면 `AudioPlayer` 클래스의 코드만 수정하면 됩니다.

음원 플레이어 코드에서는 패키지 코드가 제외되고 재생과 관련된 로직만 다루게 되어 코드가 일관성 있게 정리되었습니다. 또한 패키지의 변화에 더 빠르게 대응할 수 있어 코드의 유연성이 향상되었습니다.
