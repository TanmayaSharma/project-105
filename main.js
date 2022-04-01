Webcam.set({
    width :350,
    height :300,
    image_format :'png',
    png_quality :90
});

camera =document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id ="captured_image" src ="'+data_uri+'"/>';
    });
}

console.log(ml5.version);//ml5 is a library which is used to recognise image

hi = ml5.imageClassifier('https://storage.googleapis.com/tm-model/rwZN1q31H/model.json',modelJason);

function modelJason()
{
    console.log('modelJason!');
}

function show_result()
{
  doo=  document.getElementById('captured_image');
    hi.classify(doo , mood);

}

function mood(error , results)
{
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }

}