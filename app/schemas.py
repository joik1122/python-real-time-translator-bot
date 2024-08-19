from pydantic import (
    BaseModel,
)  # pydantic is a library that allows you to declare data classes using Python type hints
from typing import List, Dict


class TranslationRequest(BaseModel):
    text: str
    languages: List[str]


class TaskResponse(BaseModel):
    task_id: int


class TranslationStatus(BaseModel):
    task_id: int
    status: str
    translations: Dict[str, str]
