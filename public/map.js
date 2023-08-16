function init() {
  var Layer_502 = new Array();
  var map_502 = L.map('map_502',{maxBounds: [[35.595117671993066, 139.46526938853586], [35.30817425882817, 139.73924092638254]]}).setView([35.430853497716456, 139.6142753630236], 16);
    mapLink = '<a href="https://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18,minZoom: 12
          }).addTo(map_502);
  Polygon();
  click_get_position(map_502);
  
  function Polygon(){
    /** 実際に表示するポリゴンデータの配列 **/
    const Polygons_shape = new Array();

    /** 表示するポリゴンの緯度経度 */
    const Poly_pos = new Array();

    /** 吹き出しの文言 */
    const Poly_nam = new Array();

    /** 吹き出しのリンクがあればここに */
    const Polygons_shape_lnk = new Array();

    /** 枠線の色 */
    const edge_col = new Array();

    /** ポリゴンの塗りつぶしの色 */
    const fill_col = new Array();

    /** 枠線の幅 */
    const Line_W = 2;

    Poly_pos[ 0 ] = [
        [35.43518798495131,139.61048126220706],
        [35.43388111203584,139.6107602119446],
        [35.433837403545006,139.6113181114197],
        [35.43392044965729,139.61146831512454],
        [35.43359700642137,139.6118009090424],
        [35.43348773476429,139.6116775274277],
        [35.433732503070225,139.6113717556],
        [35.433369721208074,139.61080849170688],
        [35.43360574814754,139.61036860942843],
        [35.43430508316558,139.6088129281998],
        [35.43465474839695,139.6085608005524],
        [35.43436190386901,139.60828185081485],
        [35.434549848987,139.6080565452576],
        [35.43406905827602,139.6068334579468],
        [35.434309453990366,139.60668325424197],
        [35.43459355709108,139.6056640148163],
        [35.43423077910831,139.60527241230014],
        [35.43361011901026,139.60540115833285],
        [35.433583893830345,139.605068564415],
        [35.433190515106816,139.6040385961533],
        [35.43280587627453,139.60370600223544],
        [35.43265726532452,139.6040761470795],
        [35.43380243673525,139.60654914379123],
        [35.43368005278159,139.60669398307803],
        [35.43267037806643,139.6044570207596],
        [35.43312495179938,139.60623264312747],
        [35.4329938250244,139.60631847381595],
        [35.43263541074993,139.60562109947207],
        [35.432438719311605,139.60551381111148],
        [35.4323294460827,139.60427999496463],
        [35.43204096404598,139.60544943809512],
        [35.431804932519974,139.6044570207596],
        [35.431446512953855,139.60429608821872],
        [35.43152956153192,139.6033197641373],
        [35.43107060779262,139.60355043411258],
        [35.430970074719525,139.60244536399844],
        [35.43055919911624,139.602187871933],
        [35.430192031909876,139.60266530513766],
        [35.4301570635172,139.60311591625216],
        [35.42962816472644,139.60292816162112],
        [35.42971121517967,139.60261166095736],
        [35.42942272376363,139.60241317749026],
        [35.429151715734456,139.6020215749741],
        [35.429326559728636,139.6016085147858],
        [35.42784037367883,139.6002566814423],
        [35.427193437066464,139.60059463977817],
        [35.42680876959025,139.5999884605408],
        [35.42695739133292,139.59921061992648],
        [35.42640224401071,139.59978461265567],
        [35.42480672056307,139.5996826887131],
        [35.42460563865314,139.60019767284396],
        [35.42394993328573,139.59992945194247],
        [35.42401987544589,139.59945738315585],
        [35.423298594003064,139.59905505180362],
        [35.42312373692309,139.5989799499512],
        [35.42155000612323,139.59887802600863],
        [35.42146257573293,139.59852397441867],
        [35.42103853699375,139.59815919399264],
        [35.42057515190181,139.59810554981235],
        [35.420347829938834,139.59842741489413],
        [35.42023416871682,139.59801435470584],
        [35.4203390867736,139.5980250835419],
        [35.419213, 139.5977589],
        [35.419213, 139.5977589],
        [35.419213, 139.5977589],
        [35.419628, 139.598197],
        [35.4191981, 139.5984126],
        [35.4194622, 139.5986164],
        [35.4190029, 139.5998846],
        [35.4183205, 139.6002201],
        [35.4184467, 139.6008824],
        [35.417847285462614, 139.60077746701705],
        [35.41779492928873, 139.600714434345],
        [35.41721999694271, 139.60106353838532],
        [35.41765070266258, 139.60152658610923],
        [35.41810906584116, 139.60141749109613],
        [35.41846469066398, 139.60095686770737],
        [35.41885587613935, 139.60060776366547],
        [35.41943474817713, 139.60149022106896],
        [35.419513774747465, 139.60122839303753],
        [35.419691584247296, 139.60134476105148],
        [35.420094617660716, 139.60137870172224],
        [35.420090666362526, 139.60165022708816],
        [35.421991346863834, 139.60190141350455],
        [35.4219238280193, 139.60255964879553],
        [35.42212638438316, 139.6021315657042],
        [35.422651528166995, 139.6019520469956],
        [35.423919361126885, 139.60245838183482],
        [35.423844341980534, 139.60302915928995],
        [35.42412941436493, 139.603001541026],
        [35.42426444832315, 139.60260567926355],
        [35.42444824414899, 139.60272535840735],
        [35.42446324787136, 139.602969319739],
        [35.42470330704923, 139.6028450375512],
        [35.42469205429124, 139.60340660891833],
        [35.42487960005232, 139.60325470846655],
        [35.42503144274411, 139.60299526761773],
        [35.42484206550846, 139.60290327587902],
        [35.424834174780656, 139.60322282612927],
        [35.42518136607323, 139.60348427633406],
        [35.42528789037433, 139.60377477656158],
        [35.42558773582849, 139.60345522632477],
        [35.42541414124507, 139.60392002668883],
        [35.42558773582849, 139.60409432682533],
        [35.426114338810386, 139.60447761900767],
        [35.426101225001204, 139.60470292456276],
        [35.42629793191433, 139.6047887552504],
        [35.425974458069334, 139.60518572218078],
        [35.42678125006656, 139.60634199566286],
        [35.4269472539376, 139.60601278138975],
        [35.42702295159467, 139.6063126597401],
        [35.42717567471031, 139.60632243838185],
        [35.42878264765328, 139.60844300808648],
        [35.42913670796318, 139.60820160927747],
        [35.42912359464613, 139.60895799221237],
        [35.42958693055839, 139.60899017872356],
        [35.42952136431829, 139.6092476707865],
        [35.4296743521288, 139.60944615425169],
        [35.429906018831424, 139.60926376404043],
        [35.430571426722786, 139.61028812826763],
        [35.429801740744125, 139.61118437620584],
        [35.430645786238095, 139.61042497210892],
        [35.43093987577663, 139.61134679487554],
        [35.43077281512323, 139.6116813154853],
        [35.43067609563919, 139.61163815153566],
        [35.430728851735786, 139.61183238930903],
        [35.43055189730333, 139.61203840081433],
        [35.43091906285835, 139.61260166469543],
        [35.43055626833174, 139.61299863157237],
        [35.43080541655833, 139.61320247944278],
        [35.43048633184887, 139.61362626843655],
        [35.43070051214595, 139.61381402310633],
        [35.43050381598541, 139.61388912495335],
        [35.43051692907772, 139.61407151515317],
        [35.430905949845155, 139.6141358881649],
        [35.430853497716456, 139.6142753630236],
        [35.430652430906626, 139.61445775322343],
        [35.4308097875831, 139.614779618282],
        [35.43060872066415, 139.61490836430542],
        [35.43083164265274, 139.6149512796466],
        [35.43087098176315, 139.61572375578712],
        [35.43070488316627, 139.6157988576341],
        [35.43057375245892, 139.61613681607682],
        [35.43103191388634, 139.6162108625863],
        [35.43114027121673, 139.61702922703475],
        [35.43104441666268, 139.61717244081325],
        [35.43117777948941, 139.61735657281417],
        [35.43114860638995, 139.6176327708155],
        [35.430944394397685, 139.6177452959272],
        [35.431306974517234, 139.61785270626103],
        [35.431461174762966, 139.61816982248482],
        [35.431336147563385, 139.6180726419325],
        [35.43130280694297, 139.61788339515383],
        [35.43106942221356, 139.61831815126706],
        [35.43110276293061, 139.61862503793523],
        [35.43141212894536, 139.61860649757546],
        [35.431427427379965, 139.61885661359614],
        [35.43127881388895, 139.61891562219023],
        [35.431449282281974, 139.619414513031],
        [35.43134000771258, 139.61967200507786],
        [35.431492992068215, 139.62011725174216],
        [35.43163723419449, 139.61969882716605],
        [35.4317771051005, 139.61963445415435],
        [35.431733395468456, 139.6206590579241],
        [35.431593524486544, 139.62065369350645],
        [35.431680943878696, 139.621200864106],//
        [35.432507052448926, 139.62158173775862],
        [35.431969427199746, 139.6211364910943],
        [35.43208744280587, 139.62049812539482],
        [35.43234532815808, 139.62029427752444],
        [35.432660944806614, 139.6214886226655],
        [35.433024400902816, 139.62156487813408],
        [35.43334276135604, 139.62110903119913],
        [35.43350194111065, 139.62198816457365],
        [35.43332949636229, 139.62240059751483],
        [35.43134414428915, 139.6214780502993],
        [35.43108768099081, 139.62185792274508],
        [35.43114958599967, 139.6226339478843],
        [35.431220334522955, 139.62242230466452],
        [35.43154312387172, 139.62246571865833],
        [35.43133087896616, 139.6226448013828],
        [35.43136183138304, 139.62280760385957],
        [35.43168296200646, 139.62288764841065],
        [35.431481376742035, 139.6231270440351],
        [35.43161168948539, 139.6234280896121],
        [35.43224791927879, 139.6233528282216],
        [35.43232840582021, 139.62368209682145],
        [35.43275383334561, 139.6235597970558],
        [35.43277299669475, 139.62398784623556],
        [35.43262352245048, 139.62412425751265],
        [35.43283431940514, 139.6241477768438],
        [35.432918638022954, 139.62506502508617],
        [35.432750000699, 139.6251826210147],
        [35.432979960598665, 139.6252202517118],
        [35.433313401286725, 139.62653262227394],
        [35.43304894844375, 139.62668784909934],
        [35.433416882602046, 139.62784499303586],
        [35.43304894844375, 139.62822130000708],
        [35.4343520410209, 139.62940666696642],
        [35.435271858401975, 139.62886102201372],
        [35.43553247140971, 139.62976415874462],
        [35.43499591429791, 139.6300369812988],
        [35.43539449992245, 139.6303192115272],
        [35.43519520735681, 139.63068611082414],
        [35.43458966153483, 139.63083663361263],
        [35.434957588653106, 139.63178680871496],
        [35.43530251879962, 139.63205022359483],
        [35.43494225839008, 139.6324547535889],
        [35.43510322600631, 139.63286869125724],
        [35.435379169742625, 139.63257705335454],
        [35.435425160273375, 139.6329345449772],
        [35.43612268010294, 139.63256764568024],
        [35.43621466031084, 139.63288750667436],
        [35.43676653921963, 139.63238889993752],
        [35.43710762916615, 139.63312269856945]
    ];
    edge_col[ 0 ] = "FFFF00";
    fill_col[ 0 ] = "FFFF00";
    Poly_nam[ 0 ] = "Yellow";
    Polygons_shape_lnk[ 0 ] = "";

    Poly_pos[ 1 ] = [ 
      [35.43409528329793,139.61472451686862],[35.43441872453234,139.61428463459018],[35.434676602423494,139.61368381977084],[35.43453236573869,139.61302399635318],[35.43422203745,139.61251437664035],[35.43397289978934,139.61199402809146],[35.433706277930185,139.61135029792788],[35.432867068938926,139.6100735664368],[35.43240812282245,139.60945129394534],[35.43187049690216,139.60894703865054],[35.43116239874973,139.60838913917544],[35.4304455523027,139.60806727409366],[35.42997347920657,139.60788488388064],[35.429553856353586,139.6076059341431],[35.429282848765666,139.60730552673343],[35.42901621137787,139.60674762725833],[35.428662150531366,139.60573911666873],[35.428404253379384,139.60490226745608],[35.428072045661516,139.60424244403842],[35.427451338095615,139.60282623767856],[35.42704481575935,139.60159778594974],[35.42676505726079,139.60111498832705],[35.426314818886816,139.60083067417148],[35.42607439930687,139.60028350353244],[35.42573781068926,139.60019767284396],[35.42534439363916,139.60033714771274],[35.425064629234456,139.60062146186831],[35.42481546324343,139.60077166557315],[35.42454443971137,139.6006751060486],[35.424181616458675,139.6006375551224],[35.42374884923695,139.6007287502289],[35.42326799404148,139.60066974163058],[35.42265162091128,139.60049808025363],[35.42231064651523,139.60023522377017],[35.4214494611662,139.60012793540957],[35.420798101665554,139.600203037262],[35.4201161357396,139.60005283355716],[35.41982323834542,139.60047125816348],[35.41967023182056,139.6008896827698],[35.41930738661423,139.60087895393374],[35.41897076972063,139.60093796253207],[35.41845491253119,139.60116326808932],[35.41804397308448,139.60116326808932],[35.41666687348803,139.600203037262],[35.41603733440473,139.59960222244266],[35.41523291619596,139.5995378494263],[35.41498809166887,139.5992696285248],[35.41481321655123,139.59877073764804],[35.41456401885287,139.5984596014023],[35.41413994380501,139.59812164306643],[35.41380767725973,139.5979177951813],[35.41337922627111,139.5977568626404],[35.41316499992256,139.59770858287814],[35.412985748866724,139.597864151001],[35.41273217352139,139.59783196449283],[35.41256166551296,139.597681760788],[35.41237366908548,139.59744036197665],[35.412273112676814,139.59720969200137],[35.41216381209028,139.5968931913376],[35.41215506803696,139.59650695323947],[35.412019535089044,139.59627091884616],[35.411827165352285,139.59623336791995],[35.4114118200364,139.59621727466586],[35.41107954224241,139.59612071514132],[35.41093089120684,139.59586858749392],[35.41081721670049,139.59567546844485],[35.41056800664476,139.59555208683017],[35.41018763191605,139.59550917148593],[35.40994279206051,139.5953965187073],[35.409711067940684,139.5952355861664],[35.40943562142213,139.5950692892075],[35.40913831301237,139.59487080574038],[35.40895905300004,139.59490299224856],[35.408731698264525,139.59486007690433],[35.40852620400946,139.5947474241257],[35.40834694263568,139.59450066089633],[35.407992790944824,139.59432363510135],[35.40770859401811,139.5944792032242],[35.40743751293885,139.59445238113406],[35.40644937096343,139.59373354911807],[35.40642750927833,139.59381401538852],[35.40611270035548,139.59383547306064],[35.40509830768469,139.59370672702792],[35.404650969407776,139.59383412421218],[35.40428355289633,139.59356049102124],[35.40420919458907,139.59391460456249],[35.40425730879573,139.5942579873904],[35.40373679903505,139.59457454343482],//南端
      [35.403677262002105,139.59219396114352],[35.40476053539761,139.5926326218802],[35.40577966866581,139.5924555659088],[35.40630453914181,139.5924877579036],[35.40723617581933,139.59272383253216],[35.4075117282661,139.5935339977348],[35.40776103681094,139.59374324570106],[35.40824653018523,139.59346424841274],[35.40856144324276,139.59357692039455],[35.40889385013523,139.59412954963875],[35.40941432659458,139.5943066056102],[35.40991293114282,139.5946875442154],[35.41036342207332,139.59490215751413],[35.41054711668146,139.5948055815297],[35.4108095368239,139.59492898417645],[35.411389044944706,139.5952509041245],[35.411459023001825,139.59559428540248],[35.411585858075505,139.59567476538945],[35.41190075808505,139.59562647739725],[35.412574290085985,139.59629714395575],[35.41265301423812,139.59676392788046],[35.41289574655647,139.59694634918438],[35.41306631477517,139.59712340515577],[35.4140109937572,139.5974077677766],[35.4147413629716,139.5979228396935],[35.415329589651776,139.5985103435987],[35.415469538861515,139.59904151151304],[35.416221761699546,139.5989771275234],[35.416707204105066,139.59936343146111],[35.41826847201175,139.60057599659882],[35.418703609916776,139.6001923753274],[35.419272128261625,139.6002728553144],[35.41921964981325,139.59999922335854],[35.419298367473004,139.59952170876892],[35.419438309789314,139.5992909994728],[35.41979691086534,139.59919978882087],[35.42015113719042,139.59934465279747],[35.4209186222184,139.59944122878187],[35.42251916576137,139.59951634343645],[35.422886185217614,139.599898649746],[35.423410944279134,139.59998449506548],[35.42387010565377,139.6000113217278],[35.424456079225656,139.59985572708624],[35.424665979169696,139.5999630337356],[35.42520384527963,139.59960892179274],[35.425903503137334,139.59943991382],[35.42639763283755,139.59955258580183],[35.42658129089145,139.5997457377707],[35.42673871174716,139.60016959903564],[35.4270929075476,139.60032251101097],[35.427329037215856,139.6004942016499],[35.42747771109629,139.60097708157204],[35.427958712946825,139.6024149906734],[35.428920708029935,139.60432504903193],[35.42985208323052,139.60678773663466],[35.43014942140191,139.60707746458795],[35.431290665072304,139.60763009383214],[35.43266800658421,139.60853146968674],[35.434386371058956,139.6108841679739],[35.43467494775613,139.6115843438609],[35.43480611864022,139.61219599176223],[35.43518651299572,139.61269496768173],[35.435461969855446,139.61352122888178],[35.43543573590939,139.61462648737017],[35.436384524855555,139.61501010864166],[35.437053479926576,139.61546079656895],[35.437421420998994,139.615872502327],[35.43774484887228,139.61677908897403],[35.43865931792967,139.61945744133172],[35.43897615452453,139.61995613743318],[35.43904610861877,139.62101847326184],[35.439179458442524,139.62190107045276],[35.4396822508735,139.62273269698528],[35.44085833568777,139.62442814204513],[35.44137423364194,139.62530805656982],[35.44353834581459,139.6264884297128], //北端
      [35.44337312586479,139.62745846762263],[35.44180788359985,139.62684911649467],[35.441163014114416,139.62644671655957],[35.44059465028501,139.62579751133094],[35.440292978622296,139.62512147944003],[35.4395890736797,139.62438642889194],[35.43884944689364,139.62326577486567],[35.438442836877506,139.6220961323877],[35.43829855541039,139.62113037254352],[35.43825491828988,139.62020108180107],[35.437297406937326,139.61788862350744],[35.43717061234277,139.61749695423728],[35.43696074498885,139.6165955783827],[35.4366787348706,139.61623073577488],[35.43646449396546,139.6159731998164],[35.43621527423608,139.6159088158268],[35.435270855629646,139.61554933855146],[35.434855482827714,139.61523278393585],[35.43363558610631,139.61726087960866],[35.43338567806485,139.61823387211209],[35.433162683501045,139.61942497591997],[35.43312340953457,139.6209322475361],[35.433180251372484,139.62201067936215],[35.43360000524114,139.6254230308117],[35.43380988135492,139.62572617209614],[35.43380550894144,139.62644512664681],[35.434225259550715,139.62729553184298],[35.43457067768172,139.62849736631574],[35.43499916900023,139.6295275101496],[35.43525932333108,139.63040205934183],[35.43642235594339,139.63316520556273],[35.43727931659194,139.6356520371616],[35.43745857761482,139.63707385026558],[35.437484810901786,139.63782499681105],[35.43758099954746,139.63824349274356],[35.438053196686695,139.63970822850726],[35.438363621075005,139.64160487353462],[35.439286797082836,139.6444021360525],[35.439745867945426,139.64489038130708],[35.43989451890177,139.6451747439279],[35.44001256505391,139.64561470119023],[35.44135915335458,139.648238348767], //東端
      [35.440544936996346,139.64845198453145],[35.439110892613996,139.64549300367543],[35.43890103031782,139.64512279573518],[35.43847255976449,139.64424288121046],[35.43812715837267,139.64335760135322],[35.43774677791017,139.64234623618307],[35.43760249519564,139.64194920158042],[35.43760249519564,139.641106844383],[35.43743635114349,139.64002841255694],[35.43685921650876,139.6389016927387],[35.43673679347863,139.6376757142698],[35.43671493220368,139.6374450049737],[35.43663623156463,139.63725721833734],[35.436644976083855,139.63592125055285],[35.43481516473868,139.6310709900019],[35.4342751766223,139.62992549152003],[35.43346846698187,139.62774716653811],[35.43294377344708,139.6256117642159],[35.43266393549724,139.6240826444626],[35.432484663799556,139.622344276743],[35.4310242404673,139.62157166886763],[35.430447059872286,139.62144290088838],[35.42796771452549,139.62308475571976],[35.41748270633685,139.6272518392264], //東南端
      [35.41739063574069,139.62627929212212],[35.419074340470836,139.62559252956623],[35.4206618012746,139.62510428431167],[35.42651046702316,139.62260065012626],[35.427704235215266,139.62223044218595],[35.430117954205144,139.62073887975987],[35.43120235512751,139.6207013224326],[35.432400426264635,139.6212378556794],[35.432400426264635,139.6197516585858],[35.43263654037156,139.61893076271824],[35.43271524492002,139.6179006188844],[35.43299071023384,139.6169509550376],[35.43350228617373,139.615969099196]
    ];
    edge_col[ 1 ] = "FF0000";
    fill_col[ 1 ] = "FF0000";
    Poly_nam[ 1 ] = "red";
    Polygons_shape_lnk[ 1 ] = "";

    Poly_pos[ 2 ] = [
      [35.437159, 139.636296],
      [35.439196, 139.634811],
      [35.439633, 139.6353683],
      [35.440367, 139.634532],
      [35.442395, 139.634382],
      [35.441102, 139.633931],
      [35.441451, 139.633502],
      [35.440315, 139.631744],
      [35.439633, 139.631315],
      [35.440227, 139.630457],
      [35.439668, 139.629385],
      [35.439493, 139.629363],
      [35.439196, 139.629170],
      [35.439318, 139.629149],
      [35.439528, 139.629235],
      [35.437745, 139.625374],
      [35.437447, 139.625439],
      [35.437413, 139.625374],
      [35.437465, 139.625374],
      [35.437028, 139.625203],
      [35.436888, 139.624945],
      [35.437500, 139.625031],
      [35.436066, 139.620956],
      [35.436888, 139.632752],
      [35.436486, 139.633545]
    ];
    edge_col[ 2 ] = "FFFF00";
    fill_col[ 2 ] = "FFFF00";
    Poly_nam[ 2 ] = "";
    Polygons_shape_lnk[ 2 ] = "";
    
    Poly_pos[ 3 ] = [
      [35.441599,139.632753],
      [35.443173,139.635329],
      [35.444886,139.632517],
      [35.443330,139.628761],
      [35.442211,139.627580],
      [35.441241,139.626571],
      [35.440035,139.625112],
      [35.439354,139.623996],
      [35.438847,139.623008],
      [35.437082,139.623287],
      [35.440891,139.632560]
    ];
    edge_col[ 3 ] = "FFFF00";
    fill_col[ 3 ] = "FFFF00";
    Poly_nam[ 3 ] = "";
    Polygons_shape_lnk[ 3 ] = "  ";
    
    for (i = 0; i <= (Poly_pos.length - 1);i++){
    if (Poly_pos[ i ] != null){
        Polygons_shape[ i ] = L.polygon([ Poly_pos[ i ] ],
        { color: "#" + edge_col[ i ],
            fillColor: "#" + fill_col[ i ],
            weight: Line_W,
            fillopacity: 0.5
        });
        Polygons_shape[ i ].bindPopup(Poly_nam[ i ] + "<br>" + Polygons_shape_lnk[ i ]);
        Layer_502[ i ] = Polygons_shape[ i ];
        Layer_502[ i ].addTo(map_502);
    }
    }
  }}
function click_get_position(map){
  // マーカー達の座標
  let positions=[];
  // マーカー達の存在
  let markers=[];
  //クリックイベント
  map.on('click', function(e) {
    //クリック位置経緯度取得
    lat = e.latlng.lat;
    lng = e.latlng.lng;
    positions.push([lat,lng]);
    markers.push(L.marker([lat,lng]).addTo(map));
  } );
  map.on('dblclick',function(e) {
    console.log(JSON.stringify(positions));
  })
  document.addEventListener('keypress', keypress_ivent);
  function keypress_ivent(e) {
    if(e.key === 'x' && markers.length > 0){
      map.removeLayer(markers[markers.length - 1]);
      markers.pop();
      positions.pop();
    }
    return false; 
  }
document.addEventListener('DOMContentLoaded', img(map));
}
function img(map) {
  const imageInput = document.getElementById('imageInput');
  let imageOverlay = null;
  let imageVisible = false;
  let adjustedWidth = 10;
  let adjustedHeight = 10;
  imageInput.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      const imageWidth = map.getBounds().getWest() - map.getBounds().getEast();
      const imageHeight = map.getBounds().getNorth() - map.getBounds().getSouth();
      adjustedWidth = imageWidth;
      adjustedHeight = imageHeight;
      let imageBounds = [
        [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
        [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
      ];
      // 画像を地図に被せて表示
      imageOverlay = L.imageOverlay(imageUrl, imageBounds,{
      opacity: 0.6}).addTo(map);
      // イベントリスナーを追加して画像が変更されたときに地図の範囲を更新
      map.on('move', function() {
        imageBounds = [
          [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
          [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
        ];
        imageOverlay.setBounds(imageBounds);
      });
    } else {
      // 画像を削除
      map.eachLayer(layer => {
        if (layer instanceof L.ImageOverlay) {
          map.removeLayer(layer);
        }
      });
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'p') {
      if (imageOverlay) {
        if (imageVisible) {
          map.removeLayer(imageOverlay);
          imageVisible = false;
        } else {
          imageOverlay.addTo(map);
          imageVisible = true;
        }
      }
    }else if (e.key === 'w'){
      adjustedHeight += 0.0001;
    }else if (e.key === 's'){
      adjustedHeight -= 0.0001;
    }else if (e.key === 'd'){
      adjustedWidth -= 0.0001;
    }else if (e.key === 'a'){
      adjustedWidth += 0.0001;
    }
    imageBounds = [
      [map.getCenter().lat - adjustedHeight / 2, map.getCenter().lng - adjustedWidth / 2],
      [map.getCenter().lat + adjustedHeight / 2, map.getCenter().lng + adjustedWidth / 2]
    ];
    imageOverlay.setBounds(imageBounds);
  });
}