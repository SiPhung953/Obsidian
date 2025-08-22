#Self-Study #FundaPhysics 
#### Note: Ở phần Basic Concept thầy nói rất rõ về những tính chất mà sẽ xuất hiện xuyên suốt bài giảng, nên các bạn đọc kĩ để hiểu thêm. Tôi có đính kèm link Youtube mà tôi sử dụng để viết nên bài này.
#### Các định nghĩa Tiếng Anh tôi gần như sẽ Copy n Paste từ Lecture ra, trừ khi nó khó hiểu thì tôi sẽ viết theo ý hiểu của tôi
#### Hãy đọc song song bài của thầy với bài dịch của tôi
#### Một lần nữa, dấu // tức là comment

### Table o' Content
1) Overview, basic concept
2) Temperature, Zeroth Law of Thermodynamics, Thermal Expansion
3) Heat
## Overview, basic concept
1) What is Thermodynamics?
	- Combination of Heat (Thermal) + Movement (Dynamics)
	- Study the transfer of energy and its effect on (Physical and Chemical) properties of substance 
	  (Nghiên cứu sự truyền năng lượng và ảnh hưởng của nó lên vật chất Vật Lý và Hoá Học)
	- The "energy" being transferred here can be Work (Công) and Heat (Nhiệt)
	  $\rightarrow$ As a system does work, it loses heat. When work is done on a system, it gains heat
	  $\Rightarrow$ Heat $\leftrightarrow$ Work
2) Basic concept 
	- System (Hệ thống/Hệ tuần hoàn?) ([YouTube](https://youtu.be/TFP6SvWPOQc?si=Cpnplw3NIVNoyW4B))
		- Open system (Hệ mở): When energy and mass/matter can interact with the system
		  (Một hệ (thống) được gọi là mở khi vật nặng/vật chất và năng lượng có thể đi vào và ra khỏi hệ)
		- Closed system (Hệ đóng): When only energy can interact with the system
		  (Một hệ đóng khi vật chất không thể ra/vào, nhưng năng lượng vẫn có thể được truyền ra/vào hệ)
		- Isolated system (Hệ cách ly): When there's no interaction between the system and energy + mass
		  (Một hệ cách ly khi hoàn toàn không có tương tác gì giữa hệ và năng lượng + vật chất)
	- Microscopic and Macroscopic approach (Vi mô và vĩ mô) ([Indian Youtuber lol](https://youtu.be/eeu6OVNtjkc?si=Cl4jhupVT3BHzbXt))
		- Macroscopic
			- Macroscopic system (Hệ thống vĩ mô): Cares about the effects of a certain amount of matter, these effects can be perceived by human senses
			  (Liên quan đến tác động của một số lượng vật chất nhất định (lên cái gì đó), và những tác động này có thể được cảm nhận bằng giác quan con người)
			- Macroscopic properties (Tính chất vĩ mô): Properties that goes alongside with Macroscopic system (Pressure, Volume, Density, Composition, Viscosity, Surface Tension, Refractive Index, Color, ...)
			  (Các thuộc tính/tính chất liên quan đến Hệ thống vĩ mô, VD như: Áp suất, Thể tích, Nhiệt độ, Mật độ, Thành phần, Độ nhớt/trơn, Sức căng bề mặt, Chỉ số khúc xạ, Màu sắc, ...)
		- Microscopic
			- Microscopic system (Hệ thống vi mô): Cares about the effect of the action of many molecules, these effects cannot be perceived by human senses
			  (Liên quan đến tác động của hoạt động phần tử, và những tác động này không cảm nhận được)
			- Microscopic properties (Tính chất vi mô): Properties of Microscopic system (Molar mass, Velocity of atoms or molecules, Momentun, Kinetic energy, ...)
			  (Các tính chất của Hệ thống vi mô, VD như: Khối lượng Mol, Vận tốc của nguyên tử hay phần tử, Động lượng, Động năng)
		// So sánh: 
		- Vĩ mô quan tâm đến *một số lượng* vật chất nhất định, không quan trọng về cái gì xảy ra ở mức độ phần tử. Là những gì mắt thường có thể thấy được. VD: Núi, Tế bào, Vi khuẩn
		- Vi mô quan tâm đến *toàn bộ số lượng* vật chất bằng cách xem xét có gì xảy ra ở mức độ phần tử. Là những thứ quá nhỏ cho mắt thường (phải sử dụng kính hiển vi). VD: Nguyên tử, Phân tử
	- Intrinsic and Extrinsic properties (Thuộc tính Chuyên sâu và Mở rộng ) ([Youtube](https://youtu.be/da0T6iWA0us?si=Q-DxZJjMagrYzth5))
		- Intensive (Intrinsic) properties: Properties that are independent of the mass of the system
		  (Thuộc tính Chuyên sâu không phụ thuộc vào khối lượng hay số lượng vật chất của vật)
		- Extensive (Extrinsic) properties: Properties that are dependent of the mass of the system
		  (Thuộc tính Mở rộng phụ thuộc vào khối lượng hay lượng vật chất của vật)
		  // Ví dụ: Nhiệt độ sôi của nước là 100C, kể cả ta có 50ml nước hay 400ml nước, nên ta nói rằng nhiệt độ sôi là thuộc tính chuyên sâu. Khối lượng của một quả tạ là 1kg, nếu ta có 3 quả tạ thì ta có 3kg, nên ta nói rằng khối lượng là thuộc tính mở rộng
	- State, Process, Process path (Trạng thái, Quá trình, Quãng đường quá trình) 
		- State: The condition of the system at an instance of time, defined by specifying values of a set of measurable properties sufficient to determine all other properties
		  (Trạng thái thể hiện tình trạng của hệ thống vào một thời điểm, được xác định bởi một thuộc tính có thể đo lường được, và dùng thuộc tính đó để xác định tất cả thuộc tính khác)
		- Process: Any change of state of the system
		  (Quá trình là sự thay đổi trạng thái)
		- Process path: Infinite states the system passes while going from initial state to final state
		  (Quãng đường quá trình là hàng vạn các quá trình mà hệ thống đã đi qua (Path), từ quá trình đầu đến quá trình cuối(Process Path))
		  // Cứ tưởng tượng 3 cái này là một hành trình trên xe máy đi 5km. VD như tại km 3,4 thì bạn đi thẳng với tốc độ 30km/h (Trạng thái), rồi từ km 3,5 - km 4 là thay vì đi 30km/h thì bạn phóng 50km/h, rẽ trái, bay lên vỉa hè, tạt đầu xe khác (Quá trình), và khi bạn đã đi được từ km 0 - km 5 (Path) thì bạn đã hoàn thành chuyến đi (Process Path)
	- Reversible and Irreversible process (Quá trình có thể đảo ngược/huỷ bỏ và quá trình không thể đảo ngược)
		// Phần này hãy đọc slide để biết được sự khác nhau giữa 2 quá trình
		- Reversible process: A process that can be reversed in order to obtain the initial state of a system
		  (Quá trình mà có thể đảo ngược được về trạng thái ban đầu)
		- Irreversible process: A process that cannot be reversed in order to obtain the initial state of a system
		  (Quá trình không thể đảo ngược được về trạng thái ban đầu)
		  // Thực tế thì không có một trạng thái nào thực sự "có thể đảo ngược"
	- Thermodynamic Equilibrium (Cân bằng nhiệt động lực học) ([Youtube](https://youtu.be/TTjZlU1CSrQ?si=woCn-Br_tsumGgST))
		- A system is in an Equilibrium state when there are no unbalanced potential within the system or no tendency for the state of a system to change spontaneously
		  (Một hệ thống ở tình trạng cân bằng khi không có sự mất cân bằng trong hệ thống hay hệ thống không có xu hướng thay đổi tự phát)
		  // Có nhiều loại cân bằng nhiệt động lực học khác nhau như: Thermal Equilibrium (Cân bằng nhiệt), Mechanical Equilibrium (Cân bằng cơ học), Chemical Equilibrium (Cân bằng hoá học)
## Temperature, Zeroth Law, Thermal Expansion
1) Temperature (Nhiệt độ)
	- Temperature describe the intensity of heat present in a substance or object. Another way of defining temperature is that it is the means to express the "hotness" or "coldness" of matter or radiation
	  (Nhiệt độ miêu tả cường độ nhiệt hiện diện trong một chất hoặc vật. Một cách nói khác: Nhiệt độ thể hiện mức độ "nóng" hay "lạnh" của vật chất hoặc bức xạ)
		// Nhiệt độ có thể hiểu ntn: Khi ta nói về nhiệt độ, ta hay nghĩ đến "nóng" hay "lạnh". Nhưng mà trong khoa học, chúng ta phải định lượng mọi thứ, "nóng" hay "lạnh" quá mơ hồ. Chúng ta muốn nói về mức độ nóng hay lạnh bằng con số, từ đấy tạo nên 3 đơn vị đo lường nhiệt độ: Celsius, Fahrenheit, Kelvin.
	- Conversion (Quy đổi đơn vị):
		- $T_{K} = T_{C}+273.15$
		- $T_{C}=\frac{5}{9}.(T_{F}-32)$
	- Temperature is 1 of the [7 SI base unit](https://th.bing.com/th/id/OIP.mWUtEoHWpTDGEvZnVYg3lwHaHR?rs=1&pid=ImgDetMain)
2) Zeroth Law (Định luật 0)
	- The Zeroth Law of Thermodynamics say that: If two systems are in thermal equilibrium with a third system, then those two are in thermal equilibrium with each other. And when two bodies are in thermal equilibrium, their temperature are equal
	  (Định luật 0 của nhiệt động lực học nói rằng: Nếu như hai hệ thống trong trạng thái cân bằng nhiệt với một hệ thống khác, thì hai hệ thống ban đầu sẽ cân bằng nhiệt với nhau. Và khi hai hệ thông cân bằng nhiệt với nhau thì nhiệt độ của nó bằng nhau)
	  // Ta có thể thể hiện định luật này qua một phương trình toán học (Đừng viết cái này vào bài kiểm tra):
	  Ta có: a.b = c.b ⇒ a = c
	  // Một ví dụ của cân bằng nhiệt đó là cái nhiệt kế: Ta treo cái nhiệt kế lên đâu đó để đo nhiệt độ, nhiệt của môi trường (a) sẽ tiếp xúc với cái nhiệt kế (b), và cái năng lượng đấy sẽ được truyền vào thuỷ ngân (c) khiến cho thuỷ ngân nở ra (sự giãn nở nhiệt) cho đến khi thuỷ ngân cân bằng nhiệt với môi trường bên ngoài, và ta có thể đọc được nhiệt độ
1) Thermal expansion (Sự giãn nở nhiệt)
	- The tendency of matter to change its shape, area, volume and density in respond to a change in temperature
	  (Xu hướng thay đổi hình dạng, diện tích, thể tích và tỉ trọng của vật chất để đáp ứng với sự thay đổi nhiệt độ)
	- There are 2 types of Thermal expansion:
		- Linear expansion (Giãn nở tuyến tính): If temperature of a rod of length L is raised by an amount $\triangle{T}$, its length is found to increase by: $$\triangle{L}=L\alpha\triangle{T}$$(Nếu như nhiệt độ của một cái gậy có chiều dài L tăng lên một lượng $\triangle{T}$ thì chiều dài của cái gậy sẽ tăng lên một lượng $\triangle{L}$)
			- With $\alpha$ is called the coefficient of linear expansion
			  (Với $\alpha$ là hệ số giãn nở tuyến tính)
		- Volume expansion (mở rộng thế tích/khối lượng): If temperature of a solid or liquid whose volume is V is increased by an amount $\triangle{T}$, its volume increase by: $$\triangle{V}=V\beta\triangle{T}$$(Nếu như thể tích/khối lượng của vật tăng lên một lượng $\triangle{T}$ thì thể tích/khối lượng của vật sẽ tăng lên một lượng $\triangle{V}$)
			- With $\beta$ is called the coefficient of volume expansion
			  (Với $\beta$ là hệ số mở rộng thể tích)
	// Lý do vì sao sự giãn nở nhiệt quan trọng thì hãy đọc lecture
## Heat
1) Heat (Nhiệt lượng)
	// Hãy nhìn hình ở trong Lecture
	- The energy transferred from one medium or object to another because of a temperature difference that exists between them
	  (Nhiệt lượng là năng lượng từ vật này qua vật khác khi mà có sự chênh lệnh nhiệt độ giữa chúng)
	- (Lecture) Is heat an intrinsic property of a system? - No, it's just a means of describing the transfer of energy
	  (Nhiệt lượng có phải là Thuộc tính Chuyên sâu không? - Không, nhiệt chỉ là một cách để miêu tả sự truyền năng lượng thôi)
	- Unit of measurement: J (Joule)
	  (Đơn vị đo lường nhiệt lượng là Jun)
2) Specific heat (Nhiệt dung riêng)
	- If heat Q is absorbed by an object, the object's temperature change by an amount $\triangle{T}$ related to Q by: $$Q=C.\triangle{T}=C.({T_{f}-T_{i}})$$(Nếu nhiệt lượng Q được hấp thụ bởi một vật, thì nhiệt độ sẽ thay đổi một lượng $\triangle{T}$ qua công thức)
	- If the object has mass m: $$Q=c.m.\triangle{T}=c.m.(T_{f}-T_{i})$$(Nếu như vật có khối lượng m)
	- With:
		- $C$ = heat capacity (nhiệt dung) of an object ($\frac{J}{K}$)
		  The amount of heat required to change the temperature of matter by 1 unit of temperature
		  (Nhiệt dung là nhiệt lượng cần cung cấp cho một vật để nâng nhiệt độ của nó lên $1^{o}C$ hoặc 1K)
		- $c$ = specific heat of a unit mass of material of which the object is made ($\frac{J}{kg.K}$)
		  (Nhiệt dung riêng là nhiệt dung của một đơn vị khối lượng)
3) Heat of transformation (Nhiệt biến đổi)
	- Melting (Tan chảy): To melt a solid means to change it from the solid state to liquid state
	  (Để làm chảy một chất rắn là khiến vật chuyển từ rắn → lỏng)
	- Vaporizing (Bay hơi): To vaporize a liquid means to change it from the liquid state to vapor/gas state
	  (Để làm bay hơi là khiến vật chuyển từ lỏng → khí)
	- Amount of energy required to change the state (not the temperature) of a particular material of mass m $$Q=L.m$$(Lượng năng lượng cần để thay đổi trạng thái (mà không thay đổi nhiệt độ) của một nguyên liệu có khối lượng m)
	- With:
		- $L$ = Heat of transformation ($\frac{J}{kg}$)
		- $L_v$ = Heat of vaporization (Nhiệt bay hơi)
		  VD: Nước ở nhiệt độ sôi hoặc nhiệt độ ngưng tụ có nhiệt bay hơi: $L_{v}=539\frac{cal}{g}=40.7\frac{kJ}{mol}=2256\frac{kJ}{kg}$
		- $L_{f}$ = Heat of fusion (Nhiệt phản ứng tổng hợp) // idk
		  VD: Nước ở nhiệt độ đông đá hoặc nhiệt độ nóng chảy: $L_{f}=79.5\frac{cal}{g}=6.01\frac{kJ}{mol}=333\frac{kJ}{kg}$