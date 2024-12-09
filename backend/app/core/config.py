from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "Healthcare Management System"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    
    # Database settings
    DATABASE_URL: str = "sqlite:///./healthcare.db"
    
    # JWT Settings
    SECRET_KEY: str = "your-secret-key-here"  # Change in production
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # External API Keys
    GOOGLE_MAPS_API_KEY: Optional[str] = None
    
    class Config:
        env_file = ".env"

settings = Settings()
