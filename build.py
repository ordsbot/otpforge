#!/usr/bin/env python3
"""
Build script for OtpForge
Creates executables for CLI and GUI using PyInstaller
"""

import os
import platform
import subprocess
import sys
from pathlib import Path

def run_command(cmd, cwd=None):
    """Run a command and check for errors"""
    print(f"Running: {' '.join(cmd)}")
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        sys.exit(1)
    return result.stdout

def build_cli():
    """Build CLI executable"""
    print("Building CLI...")
    cmd = [
        sys.executable, "-m", "PyInstaller",
        "--onefile",
        "--name", "otpforge",
        "cli.py"
    ]
    run_command(cmd)

def build_gui():
    """Build GUI executable"""
    print("Building GUI...")
    system = platform.system().lower()

    if system == "darwin":
        # On macOS, create an app bundle
        cmd = [
            sys.executable, "-m", "PyInstaller",
            "--onedir",
            "--name", "otpforge-GUI",
            "--windowed",
            "gui.py"
        ]
    else:
        # On Windows/Linux, create a single executable
        gui_name = "otpforge-GUI" if system == "windows" else "otpforge-gui"
        cmd = [
            sys.executable, "-m", "PyInstaller",
            "--onefile",
            "--name", gui_name,
            "gui.py"
        ]
    run_command(cmd)

def main():
    # Ensure we're in the project root
    project_root = Path(__file__).parent
    os.chdir(project_root)

    # Install PyInstaller if not present
    try:
        import PyInstaller
    except ImportError:
        print("Installing PyInstaller...")
        run_command([sys.executable, "-m", "pip", "install", "pyinstaller"])

    # Clean previous builds
    dist_dir = project_root / "dist"
    if dist_dir.exists():
        import shutil
        shutil.rmtree(dist_dir)

    # Build executables
    build_cli()
    build_gui()

    print("Build completed!")
    print(f"Executables are in: {dist_dir}")

if __name__ == "__main__":
    main()