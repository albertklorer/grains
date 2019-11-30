$(document).ready(function() {
    var player;
    var reverb;

    // listen to detune slider for update
    $(document).on('input', '#detune', function() {
        try {
            player.detune = $(this).val();
        }
        finally {
            $('#detune-value').html(String($(this).val()) + ' Cents');
        }
    });

    // listen to grain size slider for update
    $(document).on('input', '#grain-size', function() {
        try {
            player.grainSize = $(this).val();
        }
        finally {
            $('#grain-size-value').html(String($(this).val()) + ' Seconds');
        }
    });

    // listen to overlap slider for update
    $(document).on('input', '#overlap', function() {
        try {
            player.overlap = $(this).val();
        }
        finally {
            $('#overlap-value').html(String($(this).val()) + ' Seconds');
        }
    });

    // listen to playback-rate slider for update
    $(document).on('input', '#playback-rate', function() {
        try {
            player.playbackRate = $(this).val();
        }
        finally {
            $('#playback-rate-value').html(String($(this).val()));
        }

    });

    // listen to room size for update
    $(document).on('input', '#room-size', function() {
        try {
            reverb.roomSize.value = $(this).val();
        }
        finally {
            $('#room-size-value').html(String($(this).val()));
        }
    });

    // listen to dampening for update
    $(document).on('input', '#dampening', function() {
        try {
            reverb.dampening.value = $(this).val();
        }
        finally {
            $('#dampening-value').html(String($(this).val()) + ' Hertz');
        }
    });

    // listen to wet for update
    $(document).on('input', '#wet', function() {
        try {
            reverb.wet.value = $(this).val();
        }
        finally {
            $('#wet-value').html(String(parseInt($(this).val() * 100)) + '%');
        }
    });

    // listen to volume slider for update
    $(document).on('input', '#volume', function() {
        try {
            player.volume.value = $(this).val();
        }
        finally {
            $('#volume-value').html(String($(this).val()) + ' Db');
        }
    });

    $('#info').click(function() {
        $('#modal').css('display', 'block'); 
    });

    $('#close').click(function() {
        $('#modal').css('display', 'none'); 
    });

    $('#202').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('202.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/202.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });

    $('#acid').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('acid.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/acid.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });


    $('#arp').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('arp-2600.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/arp-2600.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });

    $('#juno').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('202.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/202.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });

    $('#ob-6').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('ob-6.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/ob-6.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });

    $('#prophet').click(function() {
        try {
            player.stop();
        }
        finally {
            $('#drop').html('prophet.wav');

            reverb = new Tone.Freeverb({
                "roomSize": parseFloat($('#room-size').val()),
                "dampening": parseFloat($('#dampening').val()),
                "wet": parseFloat($('#wet').val())
            }).toMaster();

            player = new Tone.GrainPlayer({
                "url": "http://albertklorer.com/grains/samples/prophet.wav",
                "loop": true,
                "grainSize": parseFloat($('#grain-size').val()),
                "overlap": parseFloat($('#overlap').val()),
                "detune": parseFloat($('#detune').val()),
                "playbackRate": parseFloat($('#playback-rate').val()),
                "volume": parseFloat($('#volume').val())
            }).connect(reverb);

            player.start();
        }
    });

});