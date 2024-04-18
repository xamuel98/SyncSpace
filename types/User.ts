export interface VideoSetting {
    resolution: string;
    frame_rate: number;
}

export interface AudioSetting {
    microphone_volume: number;
    speaker_volume: number;
    echo_cancellation: boolean;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
    profile_photo_url?: string | null;
    user_type: string;
    status: string;
    video_settings: VideoSetting;
    audio_settings: AudioSetting;
    created_at: string;
    updated_at: string;
}

export interface IUserState {
    user: User | null;
}