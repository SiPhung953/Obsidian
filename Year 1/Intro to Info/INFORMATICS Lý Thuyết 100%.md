#MadeByProfessor #IntroToInfo 
- **Note: Bài này Full Tiếng Việt, hãy tự dịch và tự hiểu trong Tiếng Anh. 
- **Dấu // có nghĩa là tôi comment (Ai lập trình C sẽ biết cái này)
- **Mỗi bài tôi đều chia phần như sau: 
	1) Acronym (Từ viết tắt)  
	2) Content (Nội dung của bài)  
- **Trong phần Content thì tôi sẽ viết tắt hết, mọi người nên đọc Acronym trước
- **File này 100% là lý thuyết, và tốt nhất các bạn không nên đọc hết vì nó khá dài, hãy nhìn vào Lecture và chọn ra phần nào bạn muốn học, nếu muốn học thực hành/câu lệnh thì hãy xem file của Learning Support
- **Tôi khuyến khích mọi người nên tự đọc Lecture và tự hiểu theo ý của mình, khó thì hỏi bạn hay Learning Support

## 1st Lecture: IntroInformatics
### 1) Acronym
- DIKW: Data, Information, Knowledge, Wisdom (Dữ liệu, Thông tin, Kiến thức, Trí tuệ)
- ADC: Analog-to-Digital Conversion (Chuyển đổi vật lý sang điện tử)
- SSD: Solid State Drive (Ổ đĩa bán dẫn)
- HDD: Hard Disk Drive (Ổ đĩa cứng)
- SSHD: Solid State Hybrid Drive (Ổ đĩa lai thể rắn)
- RAM: Random Access Memory (Bộ nhớ truy cập tạm thời)
- ROM Read-only Memory (Bộ nhớ "chỉ" đọc)
### 2) Content
- Informatic là gì?
	- Là viết tắt của Automatics Information Processing (Xử lý thông tin tự động)
	- Automatics (Tự động): Tự động hoá bởi máy tính và hệ thống viễn thông
	- Information processing (Xử lý thông tin): Các hoạt động lưu trữ, lấy, xem, chia sẻ đều là xử lý thông tin
- Informatics vs. Information Technology
	- Informatics: Đôi lúc được gọi là Khoa Học của Thông Tin, là cách mà thông tin được tạo ra, xắp xếp, lưu trữ, chia sẻ, quản lý và sử dụng
	- Information Technology: Ứng dụng, thiết bị của một bộ máy để xử lý các thông tin
	- Ngắn gọn: 
		- Informatics: Thông tin được tạo ra cho nhiều mục đích khác nhau
		- Information Technology: Làm thể nào để sử dụng các thông tin đó
- Kim tự tháp DIKW
	- Là cách thông tin và kiến ​​thức được xây dựng dựa trên nhau. Hãy tưởng tượng một kim tự tháp trong đó mỗi cấp độ đại diện cho một giai đoạn hiểu biết khác nhau:
		1) Dữ liệu: Như em bé, nó là khởi đầu của con người (thông tin). Nó đề cập đến những sự kiện và số liệu thô sơ vô nghĩa. VD: Số "5" chỉ là một điểm dữ liệu
		2) Thông tin: Khi dữ liệu có tổ chức, được xử lý và được cho ý nghĩa, nó sẽ trở thành thông tin. Thông tin này sẽ được dùng để trả lời các câu hỏi Ai, Cái Gì, Khi Nào, Ở Đâu. VD: Ta nói "Có 5 quả táo", điểm dữ liệu khi nãy đã trở thành thông tin
		3) Kiến thức: Khi ta kết nối những thông tin lại và hiểu được "Như thế nào" và "Vì sao", thì ta sẽ biến nó thành kiến thức. VD: Muốn biết ăn 5 quả táo có tốt không thì ta phải biết lợi ích của hoa quả và tác động của chúng đối với cơ thể và sức khoẻ
		4) Trí tuệ: Mức độ cao nhất của hiểu biết, khi mà kiến thức được áp dụng một cách có ý nghĩa và sâu sắc. Đòi hỏi tư duy phán đoán và khả năng đưa ra quyết định. VD: Tận dụng được kiến thức ăn uống lành mạnh để lựa chọn đồ ăn thông minh, mang lại sức khoẻ lâu dài
- ADC: Học Sóng ĐIện Từ rồi thì biết, phần này cho bọn Audiophile nhiều hơn, chắc thế
- Lưu trữ thông tin:
	- Bộ nhớ dài hạn
		1) HDD: Tận dụng một cái đĩa quay, HDD lưu thông tin bằng cách sử dụng một cái kim (tôi hay gọi nó là bút) để ghi thông tin lên cái đĩa. Tưởng tượng HDD như một cái tủ rất to đựng đồ của bạn, mỗi lần bạn muốn tìm gì thì bạn phải mở cái tủ và lục cả đống đồ lên.
		3) SSD: Thay vì lưu trữ trên một cái đĩa quay, SSD lưu trữ thông tin điện tử. SSD như một cái tủ nhỏ hơn, nhưng được gắn thêm ngăn, tìm kiếm mọi thứ trở nên dễ dàng và nhanh hơn. Nhưng cũng tốn tiền hơn
		4) SSHD: Kết hợp 2 cái trên và bạn có SSHD, bạn vừa có một cái tủ to và nó cũng được chia ngăn gọn gàng.
	- Bộ nhớ ngắn hạn
		1) RAM: Lưu trữ thông tin khi máy đang được sử dụng, mất thông tin khi máy tắt. Cho phép đọc-viết
		2) ROM: Lưu trữ thông tin cần thiết để khởi động máy, thông tin được giữ ý nguyên kể cả khi máy tắt. Chỉ cho phép đọc

// Các bạn đọc đến phần này buồn ngủ chưa, chưa ngủ thì đọc tiếp nhá :>

## 2nd Lecture: OS
### 1) Acronym
- OS: Operating System (Hệ điều hành)
- BIOS: Basic Input/Output System (Hệ thống đầu vào, đầu ra cơ bản)
- MBR: Master Boot Record (Khu vực khởi động đặc biệt/Bản ghi khởi động chính)
- I/O: Input/Output (Đầu vào/Đầu ra)
### 2) Content
- OS là gì?
	- Hệ điều hành là "công cụ" quản lý tất cả các tài nguyên trong một cái máy, bao gồm phần cứng (Bộ nhớ, CPU, GPU, RAM) và phần mềm (Các ứng dụng, tác vụ chạy trên máy). OS chỉ đường cho mọi thứ của một cái máy để nó có được thứ nó cần, không hơn không kém
	- Ta có thể tưởng tượng như sau: Một cái máy nếu không có OS thì sẽ như là một thế giới vô luật, vô học: Nó không biết làm thế nào để quản lý phần cứng dẫn đến tác vụ chiếm đi hết tài nguyên, không biết cài ứng dụng như thế nào, không có khả năng giao tiếp với các máy tính khác hay với mạng,...
	- OS đảm nhiệm công việc là một nhà lãnh đạo: Nó đứng giữa phần mềm và phần cứng của máy tính, và nó quản lý toàn bộ tài nguyên và hoạt động trên một cái máy. Ngăn các tác vụ chiếm đi tài nguyên không cần thiết, hướng dẫn máy nên cài và nhìn một phần mềm như thế nào,...
- Quá trình khởi động BIOS/MBR
	- BIOS là phần lõi, có công việc khởi động phần cứng. Cung cấp Runtime Service cho OS và các tác vụ
		- Runtime Service: Một tập hợp những "dịch vụ" cần thiết cho phần mềm và ứng dụng. Như cô trợ giảng hỗ trợ các bạn làm bài một cách trơn tru và nhanh chóng
	- MBR là một tác vụ nhỏ, được lưu trữ ở khu vực đầu tiên trong Boot Disk (Đĩa khởi động - Ổ cứng, ổ đĩa mềm, CD, DVD)
	![[Pasted image 20231208212039.png]]
	// Đoạn này khó giải thích phết đấy
	- Bootsector: Khu khởi động (MBR là một tác vụ, nên nó cần cái gì đó để khởi động nó)
	- (Active) Partition: Phân vùng ổ (Thấy ổ C với D trên máy không, đấy là ổ cứng của bạn được phân vùng ra đấy)
	- Bootloader: Trình khởi động OS
- Phần cứng? Phần mềm?
	- Phần cứng "có thể" được chia làm 4 mục:
		1) CPU
		2) Bộ nhớ: RAM và ổ cứng
		3) I/O: Chuột, màn hình, camera, mạng
		4) Driver (Trình điều khiển)
		![[driver 2.png]]
	- Phần mềm có 2 mục:
		1) OS
		2) Ứng dụng

### 3rd Lecture: Software
// Bài này vô dụng vl, bạn bỏ qua cũng được, thầy dành 1 tiếng quảng cáo về Total Commander, we ain't no superuser (probably)
### 1) Acronym
- MS: Microsoft
- WYSIWYG: What You See Is What You Get (Nhìn như thế nào thì nó như thế)
### 2) Content
- Vậy ta đã biết khái niệm của OS rồi, bây giờ ta sẽ đi sâu hơn vào chức năng và công cụ của nó
  // Phần này nên nhìn vào Lecture, những cái nào ngang nhau được hiểu là nó đảm nhiệm chức năng của nhau (VD: MS Word xử lý thông tin Text, MS Powerpoint xử lý đa phương tiện, Defender có chức năng bảo mật mạng, Device Manager quản lý Hardware)
	- Chức năng
		- System Administration (Quản trị hệ thống):
			- Resource management (Quản lý tài nguyên)
			- Hardware, Software (Phần cứng, phần mềm)
			- Networks (Mạng)
			- Security (Bảo mật)
		- Information Processing (Xử lý thông tin):
			- Text (Chữ)
			- Image (Ảnh)
			- Number (Số)
			- Multimedia (Đa phương tiện)
	- Công cụ
		- Windows Settings (Cài đặt Windows)
			- User account (Tài khoản người dùng)
			- Device manager (Win + X + M)
			- Defender (Anti-virus)
			- File manager (Quản lý tệp)
		- Software/Application (Phần mềm, ứng dụng)
			- Notepad, MS Word
			- Paints, Photoshop
			- MS Excel
			- MS Powerpoint
- Extra: Text Editors (Trình soạn thảo văn bản)
	- WYSIWYG Editors (Gõ ra chữ) (MS Word, Google Docs,...)
	- Markup Editors (Lập trình ra chữ) (LaTex, HTML,...)

## 4th Lecture
// Bài này tôi muốn mọi người nhớ công thức nhiều hơn khái niệm, vì nó rất khó hiểu
### 1) Acronym
- BOM: Byte Order Mark (Không biết dịch ntn)
- UTF: Unicode Transformation Format (Định dạng chuyển đổi Unicode)
- BMP: Bitmap (Định dạng ảnh Bitmap)
- Dec: Decimal (Hệ thập phân)
- Hex: Hexadecimal (Hệ thập lục phân)
- Bi: Binary (Hệ nhị phân)
### 2) Content
- Với định dạng Text File (tệp chữ/tệp văn bản), ta có 3 kiểu mã hoá: UTF-8, UTF-16, UTF-32. Các bạn chỉ cần nhớ sự khác nhau giữa chúng:
	- UTF-8 và UTF-16 chênh lệnh nhau 2 Bytes, VD:
		- "USTH" -> UTF-8 = 4 Bytes
		- "USTH" -> UTF-16 = 10 Bytes
	- Vì sao? Vì UTF-16 phải có 4 chữ FE FF hoặc FF FE ở đầu để máy biết được rằng file này được mã hoá UTF-16, mỗi 1 chữ là 4 Bits, và 8 Bits = 1 Byte
- Chuyển đổi giữa Dec <-> Hex:
	- Đọc dữ liệu như thế nào
		- Hex là 16, Dec là 10
		- Hex là khi bạn chỉnh sửa dữ liệu, Dec là "độ nặng" của dữ liệu(?) ![[dec.png]]
		- Cách đọc dữ liệu Hex: Hex luôn bắt đầu bằng 42 4D (bỏ qua nó), nhóm 2 chữ một, xắp xếp từ phải sang
		- VD: 
		  42 4D F6 69 7B 00
		- Bỏ qua 42 4D, chúng ta sẽ gộp mỗi 2 chữ/số thành 1 nhóm: 
		  (F6)(69)(7B)(00)
		- Bây giờ ta sẽ sắp xếp các nhóm từ phải qua:
		  (00)(7B)(69)(F6)
		- Và ta có một chuỗi Hex để chuyển đổi qua Dec:
		  007B69F6
	- Quy luật chuyển đổi: Đếm số kí tự mà ta cần chuyển đổi, số kí tự này sẽ là luỹ thừa, chuyển từ hệ nào thì nhân hệ số của hệ ấy (Hex = 16, Dec = 10), số đầu tiên sẽ nhân với hệ số luỹ thừa - 1 và giảm dần đến 0. Lấy tổng của tất cả
	  // Tôi viết xong cái quy luật mà tôi mất não vl
		- VD:
		  Hex: 007B69F6 -> Dec: ?
		- Đầu tiên ta xem chuỗi này có chữ cái gì không thì ta sẽ phải chuyển đổi (trong nháp)![[Screenshot 2023-12-08 235605.png]]
		  Đây ta thấy là ta có chữ B = 11 và F = 15
		- Coi như mỗi kí tự của chuỗi Hex này là:
		  007B69F6 = abcdefgh
		- Đầu tiên ta thấy là có 8 kí tự cần chuyển đổi -> Luỹ thừa = 8, số đầu tiên có luỹ thừa - 1 và giảm xuống
		- Hệ số của Hex = 16
		- Vậy ta có phương trình như sau:
		  $a.16^{8-1}+b.16^{8-2}+c.16^{8-3}+d.16^{8-4}+e.16^{8-5}+f.16^{8-6}+g.16^{8-7}+h.16^{8-8}$
		- Thay số vào, và ta có:
		  $0.16^{7}+0.16^{6}+7.16^{5}+11.16^{4}+6.16^{3}+9.16^{2}+15.16^{1}+6.16^0=8088054$
		- Vậy:
		  Hex: 007B69F6 -> Dec: 8088054