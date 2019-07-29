initSidebarItems({"constant":[["CRC_POLY","The CRC polynomial to use for CRC24 generation."],["MIN_PACKET_BUF","Min. size a buffer for Link-Layer packets must have to comply with the spec."],["MIN_PAYLOAD_BUF","Min. size a PDU payload buffer must have (to cover both advertising and data channels)."],["MIN_PDU_BUF","Min. size a Link-Layer PDU buffer must have (to cover both advertising and data channels)."]],"enum":[["AddressKind","Specifies whether a device address is randomly generated or a LAN MAC address."],["NextUpdate","Specifies when the Link Layer's `update` method should be called the next time."],["RadioCmd","Specifies if and how the radio should listen for transmissions."]],"mod":[["ad_structure","Advertising Data / Extended Inquiry Response (EIR) data."],["advertising","Advertising channel operations."],["data","Data Channel structures."],["filter","Link-Layer Device Filtering."],["queue","An SPSC queue for data channel PDUs."]],"struct":[["Cmd","Command returned by the Link-Layer to the user."],["CompanyId","Company identifier for use in link layer Control PDUs."],["DeviceAddress","A Bluetooth device address."],["FeatureSet","A set of optional Link Layer features."],["LinkLayer","Implementation of the real-time BLE Link-Layer logic."],["RawTransmitter","A `Transmitter` that lowers Link-Layer packets to raw byte arrays that can be directly transmitted over the air, given a suitable radio."],["Responder","Data channel packet processor."]],"trait":[["HardwareInterface","Defines types that provide platform-dependent functionality."],["Transmitter","Trait for Link Layer packet transmission."]]});