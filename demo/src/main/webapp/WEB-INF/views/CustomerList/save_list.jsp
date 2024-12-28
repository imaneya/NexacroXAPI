<!-- 1. Designating a Java library -->
<%@ page import="java.io.*" %>
<%@ page import="com.nexacro.java.xapi.data.*" %>
<%@ page import="com.nexacro.java.xapi.tx.*" %>

<!-- 2. Defining a MIME type -->
<%@ page contentType="text/xml; charset=UTF-8" %>

<%
/** 3. Creating a basic object of Nexacro **/
PlatformData pdata = new PlatformData();

/** 6.1 Processing ErrorCode and ErrorMsg **/
int nErrorCode = 0;
String strErrorMsg = "START";

try {
    /** 4. Receiving a request from the client **/
    // create HttpPlatformRequest for receive data from client
    HttpPlatformRequest req = new HttpPlatformRequest(request);
    req.receiveData();
    /** 5. Processing data: Loading data from the file **/
    /** 5.1 Loading data from the http object **/ 
    pdata = req.getData();

    /** Obtaining a dataset from the received data **/
    DataSet ds = pdata.getDataSet("customers");

    /** Saving data as a file with init data **/
    String targetFilename = "./saveFile.bin";
    OutputStream target = new FileOutputStream(targetFilename);
    PlatformResponse res = new PlatformResponse(target, 
        PlatformType.CONTENT_TYPE_BINARY);
    res.setData(pdata);
    res.sendData();
    target.close(); 

    /** 6.2 Setting ErrorCode and ErrorMsg for success **/
    nErrorCode = 0;
    strErrorMsg = "person list saved complete : row count("+ds.getRowCount()+")";
    
} catch (Throwable th) {
    /** 6.3 Setting ErrorCode and ErrorMsg for failure **/
    nErrorCode = -1;
    strErrorMsg = th.getMessage();
    System.out.println("ERROR:"+strErrorMsg); 
}

/** 6.4 Saving ErrorCode and ErrorMsg to send them to the client **/
PlatformData senddata = new PlatformData();
VariableList varList = senddata.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg", strErrorMsg);

/** 7. Sending result data to the client **/
HttpPlatformResponse res = new HttpPlatformResponse(response, 
    PlatformType.CONTENT_TYPE_XML,"UTF-8");
res.setData(senddata);
res.sendData();
%>