import whisper

print("\nLoading Whisper Model...\n")

model = whisper.load_model(
    "base"
)

print("\nWhisper Loaded Successfully!\n")


def transcribe_audio(audio_path):

    try:

        print(
            f"\nTranscribing: {audio_path}"
        )

        result = model.transcribe(
            audio_path
        )

        transcript = result[
            "text"
        ].strip()

        print(
            "\nTranscript:"
        )

        print(
            transcript
        )

        return transcript

    except Exception as e:

        print(
            "\nWHISPER ERROR:"
        )

        print(e)

        return "Unable to transcribe audio."